// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "D:/Hackout 2024/Space-Resource-Ownership/node_modules/@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "D:/Hackout 2024/Space-Resource-Ownership/node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol";
contract SpaceLandAuction {
    struct Auction {
        uint256 landId;
        address payable seller;
        uint256 startingPrice;
        uint256 highestBid;
        address highestBidder;
        uint256 endTime;
        bool active;
    }

    mapping(uint256 => Auction) public auctions;
    IERC721 public landRegistry;

    event AuctionCreated(uint256 indexed landId, uint256 startingPrice, uint256 endTime);
    event BidPlaced(uint256 indexed landId, address indexed bidder, uint256 amount);
    event AuctionEnded(uint256 indexed landId, address indexed winner, uint256 amount);

    constructor(address _landRegistryAddress) {
        landRegistry = IERC721(_landRegistryAddress);
    }

    function createAuction(uint256 _landId, uint256 _startingPrice, uint256 _duration) public {
        require(landRegistry.ownerOf(_landId) == msg.sender, "You must own the land to create an auction");

        auctions[_landId] = Auction({
            landId: _landId,
            seller: payable(msg.sender),
            startingPrice: _startingPrice,
            highestBid: 0,
            highestBidder: address(0),
            endTime: block.timestamp + _duration,
            active: true
        });

        emit AuctionCreated(_landId, _startingPrice, block.timestamp + _duration);
    }

    function placeBid(uint256 _landId) public payable {
        Auction storage auction = auctions[_landId];
        require(block.timestamp < auction.endTime, "Auction has ended");
        require(msg.value > auction.highestBid, "Bid must be higher than the current highest bid");

        if (auction.highestBidder != address(0)) {
            payable(auction.highestBidder).transfer(auction.highestBid); // Refund the previous highest bidder
        }

        auction.highestBid = msg.value;
        auction.highestBidder = msg.sender;

        emit BidPlaced(_landId, msg.sender, msg.value);
    }

    function endAuction(uint256 _landId) public {
        Auction storage auction = auctions[_landId];
        require(block.timestamp >= auction.endTime, "Auction is still ongoing");
        require(auction.active, "Auction has already ended");

        auction.active = false;
        landRegistry.transferFrom(auction.seller, auction.highestBidder, _landId);
        auction.seller.transfer(auction.highestBid);

        emit AuctionEnded(_landId, auction.highestBidder, auction.highestBid);
    }
}
