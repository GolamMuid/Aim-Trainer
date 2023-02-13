import React from "react";
import logo from "../../assets/logo.png";

function Home({ start }) {
  return (
    <div className="container">
      <div className="home-container">
        <img src={logo} alt="Logo" />
        <button className="start-button" onClick={start}>
          {" "}
          Start{" "}
        </button>
      </div>
    </div>
  );
}

export default Home;
