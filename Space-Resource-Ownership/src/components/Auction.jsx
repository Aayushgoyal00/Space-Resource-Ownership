// src/components/Auction.js
import React, { useContext, useState } from "react";
import { Web3Context } from "../context/Web3Context";
import { SpaceLandService } from "../services/SpaceLandService";

const Auction = () => {
  const { web3, account } = useContext(Web3Context);
  const [landId, setLandId] = useState("");
  const [startingPrice, setStartingPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [bidAmount, setBidAmount] = useState("");

  const handleCreateAuction = async () => {
    const service = new SpaceLandService(web3);
    try {
      await service.createAuction(landId, startingPrice, duration, account);
      alert("Auction created successfully!");
    } catch (error) {
      console.error("Error creating auction", error);
      alert("Error creating auction");
    }
  };

  const handlePlaceBid = async () => {
    const service = new SpaceLandService(web3);
    try {
      await service.placeBid(landId, bidAmount, account);
      alert("Bid placed successfully!");
    } catch (error) {
      console.error("Error placing bid", error);
      alert("Error placing bid");
    }
  };

  return (
    <div>
      <h2>Land Auction</h2>

      <h3>Create Auction</h3>
      <input
        type="text"
        placeholder="Land ID"
        value={landId}
        onChange={(e) => setLandId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Starting Price (in Ether)"
        value={startingPrice}
        onChange={(e) => setStartingPrice(e.target.value)}
      />
      <input
        type="number"
        placeholder="Duration (in seconds)"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      />
      <button onClick={handleCreateAuction}>Create Auction</button>

      <h3>Place Bid</h3>
      <input
        type="text"
        placeholder="Land ID"
        value={landId}
        onChange={(e) => setLandId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Bid Amount (in Ether)"
        value={bidAmount}
        onChange={(e) => setBidAmount(e.target.value)}
      />
      <button onClick={handlePlaceBid}>Place Bid</button>
    </div>
  );
};

export default Auction;
