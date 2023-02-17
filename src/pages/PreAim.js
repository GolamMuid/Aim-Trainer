import React, { useState } from "react";
import "../App.css";
import gunFire from "../assets/9mm.mp3";
import ScoreCard from "../components/ScoreCard/ScoreCard";
import TargetPreAim from "../components/Target/TargetPreAim";
import TargetRegAim from "../components/Target/TargetRegAim";

function PreAim() {
  const [score, setScore] = useState(0);
  const [isRightMouseDown, setIsRightMouseDown] = useState(false);

  const fire = (e) => {
    if (e.button === 2) {
      setIsRightMouseDown(true);
    }
    if (e.buttons === 3) {
      new Audio(gunFire).play();
    }
  };

  const handleMouseUp = (e) => {
    if (e.button === 2) {
      setIsRightMouseDown(false);
    }
  };

  return (
    <div
      className={"container-2 " + (isRightMouseDown ? "aim" : "")}
      onMouseDown={(e) => fire(e)}
      onMouseUp={handleMouseUp}
    >
      <ScoreCard score={score} />
      <TargetPreAim score={score} setScore={setScore} />
    </div>
  );
}

export default PreAim;
