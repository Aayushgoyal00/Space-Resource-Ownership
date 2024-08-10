// src/components/TransferLand.jsx
import React, { useState, useContext } from 'react';
import { Web3Context } from '../context/Web3Context';

const TransferLand = () => {
  const { web3, contract, account } = useContext(Web3Context);
  const [landId, setLandId] = useState('');
  const [newOwner, setNewOwner] = useState('');

  const handleTransfer = async () => {
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
    <div>
      <h2>Transfer Land Ownership</h2>
      <div>
        <label>
          Land ID:
          <input
            type="text"
            placeholder="Enter Land ID"
            value={landId}
            onChange={(e) => setLandId(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          New Owner Address:
          <input
            type="text"
            placeholder="Enter New Owner Address"
            value={newOwner}
            onChange={(e) => setNewOwner(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleTransfer}>Transfer Land</button>
    </div>
  );
};

export default TransferLand;
