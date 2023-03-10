import React from "react";
import logo from "../../assets/logo.png";

function Home({ regAim, preAim }) {
  return (
    <div className="container">
      <div className="home-container">
        <img src={logo} alt="Logo" />
        <button className="start-button" onClick={regAim}>
          Regular Aim
          <div className="start-button-helper-text">(Click LMB to shoot)</div>
        </button>
        <button className="start-button" onClick={preAim}>
          Pre Aim
          <div className="start-button-helper-text">
            (Hold RMB to aim and LMB to shoot)
          </div>
        </button>
      </div>
    </div>
  );
}

export default Home;
