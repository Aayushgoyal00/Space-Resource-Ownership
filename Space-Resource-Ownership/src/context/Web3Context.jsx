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
