

import React, { useState, useContext } from 'react';
import { Web3Context } from '../context/Web3Context';
import './RegisterLand.css'; // Import the CSS file
import './Style_landclaim.css'

const TransferLand = () => {
  const { web3, contract, account } = useContext(Web3Context);
  const [landId, setLandId] = useState('');
  const [newOwner, setNewOwner] = useState('');

  const handleTransfer = async (e) => {
    e.preventDefault();
    try {
      // Interact with the contract to transfer land ownership
      await contract.methods.transferLand(parseInt(landId), newOwner).send({ from: account });
      alert('Land ownership transferred successfully');
    } catch (error) {
      console.error('Error transferring land:', error);
      alert('Error transferring land');
    }
  };

  return (
    <div className="home-container">
      <div className="contact-form11-contact11">
        <div className="contact-form11-max-width thq-section-max-width">
          <div className="claimland_head">
            <h1 className="claimland_1 text-xl font-bold">Transfer Your Land</h1>
            <img src='./dist/images/trade.png' alt="Location Icon" className="claimland_2" />
          </div>
          <div className="contact-form11-content3">
            <form className="contact-form11-form thq-card forms_container" onSubmit={handleTransfer}>
              <div className="contact-form11-container">
                <div className="contact-form11-input">
                  <label htmlFor="contact-form-11-land-id" className="nav-link">
                    <p className="abcd">Land ID</p>
                  </label>
                  <input
                    type="text"
                    id="contact-form-11-land-id"
                    placeholder="Enter Land ID here"
                    className="thq-input"
                    value={landId}
                    onChange={(e) => setLandId(e.target.value)}
                  />
                </div>
              </div>
              <div className="contact-form11-container forms_container_2">
                <div className="contact-form11-input">
                  <label htmlFor="contact-form-11-owner-id" className="nav-link">
                    <p className="abcd">Owner ID Address</p>
                  </label>
                  <input
                    type="text"
                    id="contact-form-11-owner-id"
                    placeholder="Enter the Owner ID"
                    className="thq-input"
                    value={newOwner}
                    onChange={(e) => setNewOwner(e.target.value)}
                  />
                </div>
              </div>
              <div className="forms_container_3">
                <button type="submit" className="thq-button-filled">
                  <span className="home-text13 thq-body-small">Transfer Land</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferLand;



// import React, { useState, useContext, useEffect } from 'react';
// import { Web3Context } from '../context/Web3Context';
// import './RegisterLand.css'; // Import the CSS file
// import './Style_landclaim.css'

// const TransferLand = () => {
//   const { web3, contract, account } = useContext(Web3Context);
//   const [landId, setLandId] = useState('');
//   const [newOwner, setNewOwner] = useState('');

//   useEffect(() => {
//     console.log('Web3:', web3);
//     console.log('Contract:', contract);
//     console.log('Account:', account);
//   }, [web3, contract, account]);

//   const handleTransfer = async (e) => {
//     e.preventDefault();
//     if (!contract) {
//       console.error('Contract is not defined');
//       alert('Contract is not defined');
//       return;
//     }
//     try {
//       // Interact with the contract to transfer land ownership
//       await contract.methods.transferLand(parseInt(landId), newOwner).send({ from: account });
//       alert('Land ownership transferred successfully');
//     } catch (error) {
//       console.error('Error transferring land:', error);
//       alert('Error transferring land');
//     }
//   };

//   return (
//     <div className="home-container">
//       <header className="home-header">
//         <div className="home-branding">
//           <img alt="image" src="public/logo.png" className="home-logo" />
//           <span className="home-company">AstroClaim</span>
//         </div>
//       </header>
//       <div className="contact-form11-contact11">
//         <div className="contact-form11-max-width thq-section-max-width">
//           <div className="claimland_head">
//           <h1 className="claimland_1 text-xl font-bold">Transfer Your Land</h1>
// //             <img src='./dist/images/trade.png' alt="Location Icon" className="claimland_2" />
// //           </div>
//           <div className="contact-form11-content3">
//             <form className="contact-form11-form thq-card forms_container" onSubmit={handleTransfer}>
//               <div className="contact-form11-container">
//                 <div className="contact-form11-input">
//                   <label htmlFor="contact-form-11-land-id" className="nav-link">
//                     <p className="abcd">Land ID</p>
//                   </label>
//                   <input
//                     type="text"
//                     id="contact-form-11-land-id"
//                     placeholder="Enter Land ID here"
//                     className="thq-input"
//                     value={landId}
//                     onChange={(e) => setLandId(e.target.value)}
//                   />
//                 </div>
//               </div>
//               <div className="contact-form11-container forms_container_2">
//                 <div className="contact-form11-input">
//                   <label htmlFor="contact-form-11-owner-id" className="nav-link">
//                     <p className="abcd">Owner ID Address</p>
//                   </label>
//                   <input
//                     type="text"
//                     id="contact-form-11-owner-id"
//                     placeholder="Enter the Owner ID"
//                     className="thq-input"
//                     value={newOwner}
//                     onChange={(e) => setNewOwner(e.target.value)}
//                   />
//                 </div>
//               </div>
//               <div className="forms_container_3">
//                 <button type="submit" className="thq-button-filled">
//                   <span className="home-text13 thq-body-small">Transfer Land</span>
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TransferLand;