
// import React from "react";
// import { Web3Provider } from "./context/Web3Context";
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import Home from './components/Home';
// import RegisterLand from "./components/RegisterLand";
// import ViewLandDetails from "./components/ViewLandDetails";
// import Auction from "./components/Auction";
// import TransferLand from "./components/TransferLand";
// import './App.css'

// function App() {
  

//   return (
//     <>
     
//     <Web3Provider>

//       <Router>
//         <div>
//           {/* Navbar */}
//           <nav>
//             <ul>
//               <li><Link to="/">Home</Link></li>
//               <li><Link to="/register-land">Register Land</Link></li>
//               <li><Link to="/view-land-details">View Land Details</Link></li>
//               <li><Link to="/transfer-land">Transfer Land</Link></li>
//               <li><Link to="/auction">Auction</Link></li>
//             </ul>
//           </nav>

//           {/* Define Routes */}
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/register-land" element={<RegisterLand />} />
//             <Route path="/view-land-details" element={<ViewLandDetails />} />
//             <Route path="/transfer-land" element={<TransferLand />} />
//             <Route path="/auction" element={<Auction />} />
//           </Routes>
//         </div>
//       </Router>
    

//     </Web3Provider>
//     </>
//   )
// }

// export default App


import React from "react";
import { Web3Provider } from "./context/Web3Context";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import RegisterLand from "./components/RegisterLand";
import ViewLandDetails from "./components/ViewLandDetails";
import Auction from "./components/Auction";
import TransferLand from "./components/TransferLand";
// import './App.css'

function App() {
  return (
    <>
      <Web3Provider>
        <Router>
          <div className="home-container">
            <header className="home-header">
              <nav data-thq="thq-navbar" className="home-navbar-interactive">
                <div className="home-branding">
                  <img alt="logo" src="/images/image1.jpg" className="home-logo" />
                  <Link to="" className="nav-link">AstroClaim</Link>
                </div>
                <div className="home-items">
                  <Link to="/auction" className="nav-link">Auction</Link>
                  <Link to="/view-land-details" className="nav-link">View Land</Link>
                  <Link to="/register-land" className="nav-link">Land Claim</Link>
                  <Link to="/transfer-land" className="nav-link">Transfer Land</Link>
                </div>
                {/* <button className="start-button button home-button">
                  <span>Login</span>
                </button> */}
                <div data-thq="thq-burger-menu" className="home-burger-menu">
                  <button className="home-button1 button">
                    <img alt="menu" src="./hamburger.svg" className="home-image" />
                    <span>Start a project</span>
                  </button>
                </div>
                <div data-thq="thq-mobile-menu" className="home-mobile-menu">
                  <div data-thq="thq-mobile-menu-nav" data-role="Nav" className="home-nav">
                    <div className="home-top">
                      <div className="home-branding1">
                        <img alt="logo" src="./image1.jpg" className="home-logo1" />
                        <span className="home-company1">AstroClaim</span>
                      </div>
                      <div data-thq="thq-close-menu" className="home-menu-close">
                        <svg viewBox="0 0 1024 1024" className="home-icon">
                          <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="home-items1">
                      <Link to="/auction" className="nav-link">Auction</Link>
                      <Link to="/view-land-details" className="nav-link">View Land</Link>
                      <Link to="/register-land" className="nav-link">Land Claim</Link>
                      <Link to="/transfer-land" className="nav-link">Transfer Land</Link>
                    </div>
                    <button className="start-button button home-button2">
                      <span>Start a project</span>
                    </button>
                  </div>
                </div>
              </nav>
            </header>

            {/* Define Routes */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register-land" element={<RegisterLand />} />
              <Route path="/view-land-details" element={<ViewLandDetails />} />
              <Route path="/transfer-land" element={<TransferLand />} />
              <Route path="/auction" element={<Auction />} />
            </Routes>
          </div>
        </Router>
      </Web3Provider>
    </>
  );
}

export default App;
