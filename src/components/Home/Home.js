import React from "react";
import logo from "../../assets/logo.png";

function Home({ regAim, preAim }) {
  return (
    <div className="container">
      <div className="home-container">
        <img src={logo} alt="Logo" />
        <button className="start-button" onClick={regAim}>
          Regular Aim
        </button>
        <button className="start-button" onClick={preAim}>
          Pre Aim
        </button>
      </div>
    </div>
  );
}

export default Home;
