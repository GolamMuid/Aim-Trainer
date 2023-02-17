import React, { useState } from "react";
import "../App.css";
import gunFire from "../assets/9mm.mp3";
import ScoreCard from "../components/ScoreCard/ScoreCard";
import TargetRegAim from "../components/Target/TargetRegAim";

function RegAim() {
  const [score, setScore] = useState(0);
  const fire = () => {
    new Audio(gunFire).play();
  };

  return (
    <div className="container" onClick={fire}>
      <ScoreCard score={score} />
      <TargetRegAim score={score} setScore={setScore} />
    </div>
  );
}

export default RegAim;
