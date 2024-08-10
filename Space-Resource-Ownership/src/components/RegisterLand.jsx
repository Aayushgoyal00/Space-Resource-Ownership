// // src/components/RegisterLand.js
// import React, { useContext, useState } from "react";
// import { Web3Context } from "../context/Web3Context";
// import { SpaceLandService } from "../services/SpaceLandService";

// const RegisterLand = () => {
//   const { web3, account } = useContext(Web3Context);
//   const [location, setLocation] = useState("");
//   const [area, setArea] = useState("");
//   const [minerals, setMinerals] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const service = new SpaceLandService(web3);
//     try {
//       const mineralsArray = minerals.split(",").map((mineral) => mineral.trim());
//       await service.registerLand(location, area, mineralsArray, account);
//       alert("Land registered successfully!");
//     } catch (error) {
//       console.error("Error registering land", error);
//       alert("Error registering land");
//     }
//   };

//   return (
//     <div>
//       <h2>Register Land</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Location"
//           value={location}
//           onChange={(e) => setLocation(e.target.value)}
//           required
//         />
//         <input
//           type="number"
//           placeholder="Area (in sq km)"
//           value={area}
//           onChange={(e) => setArea(e.target.value)}
//           required
//         />
//         <input
//           type="text"
//           placeholder="Minerals (comma separated)"
//           value={minerals}
//           onChange={(e) => setMinerals(e.target.value)}
//           required
//         />
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default RegisterLand;



import React, { useContext, useState } from "react";
import { Web3Context } from "../context/Web3Context";
import { SpaceLandService } from "../services/SpaceLandService";
import './RegisterLand.css'; // Import the CSS file
import './Style_landclaim.css'

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
    <div className="home-container">
      {/* <header className="home-header">
        <div className="home-branding">
          <img alt="image" src="public/logo.png" className="home-logo" />
          <span className="home-company">AstroClaim</span>
        </div>
      </header> */}
      <div className="contact-form11-contact11 ">
        <div className="contact-form11-max-width thq-section-max-width ">
          <div className="claimland_head">
            <h1 className="claimland_1 text-xl font-bold">Claim Your Land</h1>
            <img src='./dist/images/location.png' alt="Location Icon" className="claimland_2" />
          </div>
          <div className="contact-form11-content">
            <form className="contact-form11-form thq-card " onSubmit={handleSubmit}>
              <div className="contact-form11-container ">
                <div className="contact-form11-input ">
                  <label htmlFor="contact-form-11-first-name" className="nav-link ">
                    <p className="abcd">Location</p>
                  </label>
                  <input
                    type="text"
                    id="contact-form-11-first-name"
                    placeholder="Enter the location here"
                    className="thq-input"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="contact-form11-input2">
                <label htmlFor="contact-form-11-email" className="nav-link">
                  <p className="abcd">Area</p>
                </label>
                <input
                  type="number"
                  id="contact-form-11-email"
                  required
                  placeholder="Enter area in sq. km"
                  className="contact-form11-text-input2 thq-input"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                />
              </div>
              <div className="contact-form11-input3">
                <label htmlFor="contact-form-11-message" className="nav-link">
                  <p className="abcd">Minerals</p>
                </label>
                <textarea
                  id="contact-form-11-message"
                  rows="3"
                  placeholder="Enter the minerals found"
                  className="thq-input"
                  value={minerals}
                  onChange={(e) => setMinerals(e.target.value)}
                ></textarea>
              </div>
              <button type="submit" className="thq-button-filled">
                <span>
                  <fragment className="home-fragment2">
                    <span className="home-text13 thq-body-small">Register your Land</span>
                  </fragment>
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterLand;