// src/components/RegisterLand.js
import React, { useContext, useState } from "react";
import { Web3Context } from "../context/Web3Context";
import { SpaceLandService } from "../services/SpaceLandService";

const RegisterLand = () => {
  const { web3, account } = useContext(Web3Context);
  const [location, setLocation] = useState("");
  const [area, setArea] = useState("");
  const [minerals, setMinerals] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const service = new SpaceLandService(web3);
    try {
      const mineralsArray = minerals.split(",").map((mineral) => mineral.trim());
      await service.registerLand(location, area, mineralsArray, account);
      alert("Land registered successfully!");
    } catch (error) {
      console.error("Error registering land", error);
      alert("Error registering land");
    }
  };

  return (
    <div>
      <h2>Register Land</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Area (in sq km)"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Minerals (comma separated)"
          value={minerals}
          onChange={(e) => setMinerals(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterLand;
