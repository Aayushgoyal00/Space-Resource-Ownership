// // src/components/ViewLandDetails.js
// import React, { useContext, useState } from "react";
// import { Web3Context } from "../context/Web3Context";
// import { SpaceLandService } from "../services/SpaceLandService";

// const ViewLandDetails = () => {
//   const { web3 } = useContext(Web3Context);
//   const [landId, setLandId] = useState("");
//   const [landDetails, setLandDetails] = useState(null);

//   const handleFetchDetails = async () => {
//     const service = new SpaceLandService(web3);
//     try {
//       const details = await service.getLandDetails(landId);
//       setLandDetails(details);
//     } catch (error) {
//       console.error("Error fetching land details", error);
//       alert("Error fetching land details");
//     }
//   };

//   return (
//     <div>
//       <h2>View Land Details</h2>
//       <input
//         type="text"
//         placeholder="Land ID"
//         value={landId}
//         onChange={(e) => setLandId(e.target.value)}
//       />
//       <button onClick={handleFetchDetails}>Fetch Details</button>

//       {landDetails && (
//         <div>
//           <h3>Land ID: {landDetails.id}</h3>
//           <p>Location: {landDetails.location}</p>
//           <p>Area: {landDetails.area} sq km</p>
//           <p>Owner: {landDetails.owner}</p>
//           <p>Minerals: {landDetails.minerals.join(", ")}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ViewLandDetails;


import React, { useContext, useState } from "react";
import { Web3Context } from "../context/Web3Context";
import { SpaceLandService } from "../services/SpaceLandService";
import './Style_landclaim.css'; // Import the CSS file
import './RegisterLand.css'; 

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
    <div className="home-container">
      {/* <header className="home-header">
        <div className="home-branding">
          <img alt="image" src="public/logo.png" className="home-logo" />
          <span className="home-company">AstroClaim</span>
        </div>
      </header> */}
      <div className="contact-form11-contact11">
        <div className="contact-form11-max-width thq-section-max-width">
          <div className="claimland_head">
            <h1 className="claimland_1  text-xl font-bold">View Information About the Land</h1>
            <img src='./dist/images/id.png' alt="Location Icon" className="claimland_2" />
          </div>
          <div className="contact-form11-content3">
            <form className="contact-form11-form thq-card" onSubmit={(e) => { e.preventDefault(); handleFetchDetails(); }}>
              <div className="contact-form11-container">
                <div className="contact-form11-input">
                  <label htmlFor="contact-form-11-first-name" className="nav-link">
                    <p className="abcd">Land ID</p>
                  </label>
                  <input
                    type="text"
                    id="contact-form-11-first-name"
                    placeholder="Enter Land ID here"
                    className="thq-input"
                    value={landId}
                    onChange={(e) => setLandId(e.target.value)}
                  />
                </div>
              </div>
              <button type="submit" className="thq-button-filled">
                <span>
                  <fragment className="home-fragment2">
                    <span className="home-text13 thq-body-small">Fetch Details</span>
                  </fragment>
                </span>
              </button>
            </form>
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
        </div>
      </div>
    </div>
  );
};

export default ViewLandDetails;