// // src/components/Auction.js
// import React, { useContext, useState } from "react";
// import { Web3Context } from "../context/Web3Context";
// import { SpaceLandService } from "../services/SpaceLandService";

// const Auction = () => {
//   const { web3, account } = useContext(Web3Context);
//   const [landId, setLandId] = useState("");
//   const [startingPrice, setStartingPrice] = useState("");
//   const [duration, setDuration] = useState("");
//   const [bidAmount, setBidAmount] = useState("");

//   const handleCreateAuction = async () => {
//     const service = new SpaceLandService(web3);
//     try {
//       await service.createAuction(landId, startingPrice, duration, account);
//       alert("Auction created successfully!");
//     } catch (error) {
//       console.error("Error creating auction", error);
//       alert("Error creating auction");
//     }
//   };

//   const handlePlaceBid = async () => {
//     const service = new SpaceLandService(web3);
//     try {
//       await service.placeBid(landId, bidAmount, account);
//       alert("Bid placed successfully!");
//     } catch (error) {
//       console.error("Error placing bid", error);
//       alert("Error placing bid");
//     }
//   };

//   return (
//     <div>

//       <h3>Create Auction</h3>
//       <input
//         type="text"
//         placeholder="Land ID"
//         value={landId}
//         onChange={(e) => setLandId(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Starting Price (in Ether)"
//         value={startingPrice}
//         onChange={(e) => setStartingPrice(e.target.value)}
//       />
//       <input
//         type="number"
//         placeholder="Duration (in seconds)"
//         value={duration}
//         onChange={(e) => setDuration(e.target.value)}
//       />
//       <button onClick={handleCreateAuction}>Create Auction</button>

//       <h3>Place Bid</h3>
//       <input
//         type="text"
//         placeholder="Land ID"
//         value={landId}
//         onChange={(e) => setLandId(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Bid Amount (in Ether)"
//         value={bidAmount}
//         onChange={(e) => setBidAmount(e.target.value)}
//       />
//       <button onClick={handlePlaceBid}>Place Bid</button>
//     </div>
//   );
// };

// export default Auction;



import React, { useContext, useState } from "react";
import { Web3Context } from "../context/Web3Context";
import { SpaceLandService } from "../services/SpaceLandService";
import './RegisterLand.css'; // Import the CSS file
import './Style_landclaim.css'

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
    <div className="home-container">
      
        
      <div className="contact-form11-contact11">
        <div className="contact-form11-max-width thq-section-max-width">
          <div className="claimland_head">
            <h1 className="claimland_1 text-xl font-bold">Auction</h1>
            <img src='./dist/images/auction.jpg' alt="Location Icon" className="claimland_2" />
          </div>

          <div className="contact-form11-content3">
            <form className="contact-form11-form thq-card" onSubmit={(e) => { e.preventDefault(); handleCreateAuction(); }}>
              <h2>Create Auction</h2>
              <div className="form-row">
                <div className="contact-form11-input">
                  <input
                    type="text"
                    placeholder="Land ID"
                    className="thq-input"
                    value={landId}
                    onChange={(e) => setLandId(e.target.value)}
                  />
                </div>

                <div className="contact-form11-input2">
                  <input
                    type="text"
                    placeholder="Starting Price (in Ether)"
                    className="contact-form11-text-input2 thq-input"
                    value={startingPrice}
                    onChange={(e) => setStartingPrice(e.target.value)}
                  />
                </div>

                <div className="contact-form11-input3">
                  <input
                    type="number"
                    placeholder="Duration (in seconds)"
                    className="thq-input"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                  />
                </div>
              </div>

              <button type="submit" className="thq-button-filled">
                <span className="home-text13 thq-body-small">Create Auction</span>
              </button>
            </form>

            <form className="contact-form11-form thq-card" onSubmit={(e) => { e.preventDefault(); handlePlaceBid(); }}>
              <h2>Place Bid</h2>
              <div className="form-row">
                <div className="contact-form11-input">
                  <input
                    type="text"
                    placeholder="Land ID"
                    className="thq-input"
                    value={landId}
                    onChange={(e) => setLandId(e.target.value)}
                  />
                </div>

                <div className="contact-form11-input2">
                  <input
                    type="text"
                    placeholder="Bid Amount (in Ether)"
                    className="contact-form11-text-input2 thq-input"
                    value={bidAmount}
                    onChange={(e) => setBidAmount(e.target.value)}
                  />
                </div>
              </div>

              <button type="submit" className="thq-button-filled">
                <span className="home-text13 thq-body-small">Place your Bid</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auction;