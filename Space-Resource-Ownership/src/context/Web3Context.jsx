// src/context/Web3Context.js
import React, { createContext, useState, useEffect } from "react";
import Web3 from "web3";

export const Web3Context = createContext();

export const Web3Provider = ({ children }) => {
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null);

  useEffect(() => {
    const initWeb3 = async () => {
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum);
        try {
          await window.ethereum.request({ method: "eth_requestAccounts" });
          const accounts = await web3Instance.eth.getAccounts();
          setWeb3(web3Instance);
          setAccount(accounts[0]);
        } catch (error) {
          console.error("User denied account access");
        }
      } else {
        console.error("Non-Ethereum browser detected. You should consider trying MetaMask!");
      }
    };
    initWeb3();
  }, []);

  return (
    <Web3Context.Provider value={{ web3, account }}>
      {children}
    </Web3Context.Provider>
  );
};


// import React, { createContext, useState, useEffect } from 'react';
// import Web3 from 'web3';
// // import LAND_REGISTRY_ABI from '../contracts/Land.json'; // Adjust the path as necessary

// // import LAND_REGISTRY_ABI from './src/services/SpaceLandService';

// export const Web3Context = createContext();

// export const Web3Provider = ({ children }) => {
//   const [web3, setWeb3] = useState(null);
//   const [contract, setContract] = useState(null);
//   const [account, setAccount] = useState(null);

//   useEffect(() => {
//     const initWeb3 = async () => {
//       if (window.ethereum) {
//         const web3Instance = new Web3(window.ethereum);
//         await window.ethereum.enable();
//         setWeb3(web3Instance);

//         const accounts = await web3Instance.eth.getAccounts();
//         setAccount(accounts[0]);

//         const networkId = await web3Instance.eth.net.getId();
//         const deployedNetwork = LAND_REGISTRY_ABI.networks[networkId];
//         const contractInstance = new web3Instance.eth.Contract(
//           LAND_REGISTRY_ABI.abi,
//           deployedNetwork && deployedNetwork.address
//         );
//         setContract(contractInstance);
//       }
//     };

//     initWeb3();
//   }, []);

//   return (
//     <Web3Context.Provider value={{ web3, contract, account }}>
//       {children}
//     </Web3Context.Provider>
//   );
// };