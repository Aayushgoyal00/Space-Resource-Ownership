// src/components/ViewLandDetails.js
import React, { useContext, useState } from "react";
import { Web3Context } from "../context/Web3Context";
import { SpaceLandService } from "../services/SpaceLandService";

const ViewLandDetails = () => {
  const { web3 } = useContext(Web3Context);
  const [landId, setLandId] = useState("");
  const [landDetails, setLandDetails] = useState(null);

  const handleFetchDetails = async () => {
    const service = new SpaceLandService(web3);
    try {
      const details = await service.getLandDetails(landId);
      setLandDetails(details);
    } catch (error) {
      console.error("Error fetching land details", error);
      alert("Error fetching land details");
    }
  };

  return (
    <div>
      <h2>View Land Details</h2>
      <input
        type="text"
        placeholder="Land ID"
        value={landId}
        onChange={(e) => setLandId(e.target.value)}
      />
      <button onClick={handleFetchDetails}>Fetch Details</button>

      {landDetails && (
        <div>
          <h3>Land ID: {landDetails.id}</h3>
          <p>Location: {landDetails.location}</p>
          <p>Area: {landDetails.area} sq km</p>
          <p>Owner: {landDetails.owner}</p>
          <p>Minerals: {landDetails.minerals.join(", ")}</p>
        </div>
      )}
    </div>
  );
};

export default ViewLandDetails;
