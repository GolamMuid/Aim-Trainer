import React, { useState } from "react";
import "../App.css";

import gunFire from "../assets/9mm.mp3";
import ScoreCard from "../components/ScoreCard/ScoreCard";
import Target from "../components/Target/Target";

function Aim() {
  const [score, setScore] = useState(0);
  const fire = () => {
    new Audio(gunFire).play();
  };

  return (
    <div className="container" onClick={fire}>
      <ScoreCard score={score} />
      <Target score={score} setScore={setScore} />
    </div>
  );
}

export default Aim;
