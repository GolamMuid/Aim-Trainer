import React from "react";

function Result({ score }) {
  return (
    <div className="result-container">
      <div> Your Score is {score} </div>
      <div> Average kill per second : {(score / 60).toFixed(2)} </div>
      <div>
        Your aim is
        {score > 50 ? (
          <span style={{ color: "green" }}> Good </span>
        ) : (
          <span style={{ color: "red" }}> Not Good Enough </span>
        )}
      </div>
      <button
        className="start-button"
        onClick={() => window.location.reload(true)}
      >
        Go to home
      </button>
    </div>
  );
}

export default Result;
