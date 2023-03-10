import React, { useEffect, useState } from "react";
import zombie1 from "../../assets/1.png";
import zombie2 from "../../assets/3.png";
import zombie3 from "../../assets/4.png";
import zombie4 from "../../assets/2.png";

function TargetPreAim({ score, setScore }) {
  const zombieArray = [zombie1, zombie2, zombie3, zombie4];
  let zombie = 0;
  const [xCoord, setxCoord] = useState(1);
  const [yCoord, setyCoord] = useState(1);
  const [zombieFace, setZombieFace] = useState(zombieArray[zombie]);
  const [timerId, setTimerId] = useState(null);

  let x = window.innerWidth - 120;
  let y = window.innerHeight - 150;

  const zombieSwitch = () => {
    setxCoord(Math.floor(Math.random() * (x - 20) + 20));
    setyCoord(Math.floor(Math.random() * (y - 50) + 50));

    zombie = Math.floor(Math.random() * 4);
    setZombieFace(zombieArray[zombie]);
  };

  useEffect(() => {
    if (timerId) {
      clearTimeout(timerId);
    }

    const newTimerId = setInterval(() => {
      // Fire your function here
      zombieSwitch();
    }, 2000);

    setTimerId(newTimerId);

    return () => {
      clearInterval(newTimerId);
    };
  }, [score]);

  const resetTimer = () => {
    if (timerId) {
      clearInterval(timerId);
    }

    const newTimerId = setInterval(() => {}, 2000);

    setTimerId(newTimerId);
    zombieSwitch();
  };

  const handleScore = (e) => {
    if (e.buttons === 3) {
      setScore((prev) => prev + 1);
      resetTimer();
    }
  };

  const buttonStyle = {
    position: "absolute",
    top: yCoord,
    left: xCoord,
    height: "fit-content",
    width: "fit-content",
    border: "none",
    backgroundImage: zombie1,
  };

  return (
    <div
      style={buttonStyle}
      onMouseDown={(e) => handleScore(e)}
      className="button"
    >
      <img src={zombieFace} alt="Zombie" />
    </div>
  );
}

export default TargetPreAim;
