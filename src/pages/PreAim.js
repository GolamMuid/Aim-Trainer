import React, { useEffect, useState } from "react";
import "../App.css";
import gunFire from "../assets/9mm.mp3";
import ScoreCard from "../components/ScoreCard/ScoreCard";
import Timer from "../components/ScoreCard/Timer";
import TargetPreAim from "../components/Target/TargetPreAim";
import Result from "./Result";

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

  const [countdown, setCountdown] = useState(15);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (countdown === 0) {
      setGameOver(true);
    } else {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  return (
    <>
      {gameOver ? (
        <Result score={score} />
      ) : (
        <div
          className={"container-2 " + (isRightMouseDown ? "aim" : "")}
          onMouseDown={(e) => fire(e)}
          onMouseUp={handleMouseUp}
        >
          <ScoreCard score={score} />
          <Timer timer={countdown} />
          <TargetPreAim score={score} setScore={setScore} />
        </div>
      )}
    </>
  );
}

export default PreAim;
