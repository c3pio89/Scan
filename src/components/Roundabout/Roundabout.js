import React, { useState, useEffect } from "react";
import styles from "./Roundabout.css";
import LeftArrow from "../../../images/LeftArrow.svg";
import RightArrow from "../../../images/RightArrow.svg";
import {CARD, RoundaboutCard} from "./RoundaboutCard";

function Roundabout() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [myData, setMyData] = useState(
    CARD.slice(currentIndex, currentIndex + 3)
  );
  const [renderer, setRenderer] = useState(false);

  function handleLeft() {
    const temp = myData.shift();
    myData.push(temp);
    setMyData(myData);
    setRenderer(!renderer);
  }

  function handleRight() {
    const temp = myData.pop();
    myData.unshift(temp);
    setMyData(myData);
    setRenderer(!renderer);
  }

  useEffect(() => {
    setCurrentIndex(currentIndex);
  }, [currentIndex]);

  return (
    <>
      <div className={styles.roundaboutBar}>
        <button onClick={handleLeft} className={styles.button}>
          <img src={LeftArrow} alt="Left" />
        </button>
        <div className={styles.roundaboutDesktopContainer}>
          {myData.map((elem) => {
            return (
              <div key={elem.id} className={styles.cardDesktop}>
                <RoundaboutCard
                  data={{
                    icon: elem.icon,
                    text: elem.text,
                    class: "desktop",
                  }}
                />
              </div>
            );
          })}
        </div>
        <div className={styles.roundaboutMobileContainer}>
          {
            <RoundaboutCard
              data={{
                icon: myData[currentIndex].icon,
                text: myData[currentIndex].text,
                class: "mobile",
              }}
            />
          }
        </div>
        <button onClick={handleRight} className={styles.button}>
          <img src={RightArrow} alt="Right" />
        </button>
      </div>
    </>
  );
}

export default Roundabout;
