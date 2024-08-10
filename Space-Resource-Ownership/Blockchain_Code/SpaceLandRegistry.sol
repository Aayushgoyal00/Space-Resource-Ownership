// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
// import "@openzeppelin/contracts/utils/Counters.sol";

import "D:/Hackout 2024/Space-Resource-Ownership/node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "D:/Hackout 2024/Space-Resource-Ownership/node_modules/@openzeppelin/contracts/utils/Context.sol";

contract SpaceLandRegistry is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    struct Land {
        uint256 id;
        string location; // A unique identifier for the land's location (e.g., coordinates)
        string[] minerals; // Array of minerals available in this land
        uint256 area; // Size of the land
        address owner;
    }

    mapping(uint256 => Land) public lands;
    mapping(string => bool) private landExists; // To check if land is already registered

    event LandRegistered(uint256 indexed landId, address indexed owner, string location, uint256 area);
    event LandTransferred(uint256 indexed landId, address indexed from, address indexed to);

    constructor() ERC721("SpaceLandToken", "SLT") {}

    function registerLand(string memory _location, uint256 _area, string[] memory _minerals) public returns (uint256) {
        require(!landExists[_location], "This land is already registered");

        _tokenIds.increment();
        uint256 newLandId = _tokenIds.current();

        lands[newLandId] = Land({
            id: newLandId,
            location: _location,
            minerals: _minerals,
            area: _area,
            owner: msg.sender
        });

        _mint(msg.sender, newLandId);
        landExists[_location] = true;

        emit LandRegistered(newLandId, msg.sender, _location, _area);

        return newLandId;
    }

    function transferLand(uint256 _landId, address _to) public {
        require(ownerOf(_landId) == msg.sender, "You are not the owner of this land");

        _transfer(msg.sender, _to, _landId);
        lands[_landId].owner = _to;

        emit LandTransferred(_landId, msg.sender, _to);
    }

    function getLandDetails(uint256 _landId) public view returns (Land memory) {
        return lands[_landId];
    }

    function isLandRegistered(string memory _location) public view returns (bool) {
        return landExists[_location];
    }
}
