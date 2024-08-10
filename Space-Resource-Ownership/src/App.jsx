
import React from "react";
import { Web3Provider } from "./context/Web3Context";
import RegisterLand from "./components/RegisterLand";
import ViewLandDetails from "./components/ViewLandDetails";
import Auction from "./components/Auction";
import TransferLand from "./components/TransferLand";
import './App.css'

function App() {
  

  return (
    <>
     
    <Web3Provider>
      <div className="App" >
        <h1>Space Land Registry</h1>
        <RegisterLand /><br/><br/>
        <ViewLandDetails /><br/><br/>
        <TransferLand /><br/><br/>
        <Auction />
      </div>
    </Web3Provider>
    </>
  )
}

export default App
