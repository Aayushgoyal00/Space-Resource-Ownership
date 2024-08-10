// src/components/Home.jsx
import React from 'react';
import 'D:/Hackout 2024/Space-Resource-Ownership/src/components/Home.css';
import './style.css';
const Home = () => {
  return (
    // <div>
    //   <h1>Welcome to the Space Land Registry</h1>
    //   <p>This is the home page.</p>
    // </div>
    <>

    
    <header className="home-hero ">
          <div className="home-header1 ">
            <h1 className='text-6xl'>Own a piece of the universe, your legacy in the stars.</h1>
            <p className = "subtitle_1">
              Secure your slice of the universe and unlock endless possibilities
              with Astroclaim—where your legacy reaches beyond Earth.&nbsp;
            </p>
          </div>
        </header>
        <img
      
          src="/images/image2.jpg"
          alt="image"
          className="home-image1 mt-0"
          
        />
        <div className="home-video"></div>
        <div className="home-services">
          <div className="home-header2"><h2 className="heading">SERVICES</h2></div>
          <div className="home-grid">
            <service-wrapper>
              <div className="service-service service-root-class-name">
                <h3 className="service-title"><span>Auction</span></h3>
                <span className="service-description">
                  <span>
                    Participate in live auctions to trade valuable space
                    resources and celestial assets with global bidders
                  </span>
                </span>
              </div>
            </service-wrapper>
            <service-wrapper-2c30>
              <div className="service-service service-root-class-name1">
                <h3 className="service-title"><span>Land Claim</span></h3>
                <span className="service-description">
                  <span>
                    Claim your own piece of the cosmos and secure exclusive
                    ownership of celestial land.
                  </span>
                </span>
              </div>
            </service-wrapper-2c30>
            <service-wrapper-pkwm>
              <div className="service-service service-root-class-name5">
                <h3 className="service-title"><span>Resell Land</span></h3>
                <span className="service-description">
                  <span>
                    Resell your celestial land with us and unlock new
                    opportunities in the thriving space marketplace.
                  </span>
                </span>
              </div>
            </service-wrapper-pkwm>
          </div>
        </div>
        <div className="home-about">
          <div className="home-header3">
            <h2 className="home-company2">OUR MISSION</h2>
            <span className="home-description1">
              "Our mission at Astroclaim is to pioneer the future of space
              ownership, making the vast potential of the cosmos accessible to
              everyone. We empower individuals and organizations to claim,
              manage, and trade celestial assets, fostering a new era of
              exploration, innovation, and sustainable resource management
              beyond Earth."
            </span>
            <author-wrapper>
              <div className="author-author">
                <div className="author-details">
                  <span className="nav-link"><span>Devarsh Vasani</span></span>
                  
                </div>
              </div>
            </author-wrapper>
          </div>
          <div className="home-client-list"></div>
        </div>
      
   
    <script
      defer=""
      src="https://unpkg.com/@teleporthq/teleport-custom-scripts"
    ></script>
    </>
  );
};

export default Home;
