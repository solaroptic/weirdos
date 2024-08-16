import React, { useState, useRef, useEffect } from "react";
import plate2 from "../assets/plate2.jpg";
import plate3 from "../assets/plate3.jpg";
import plate1 from "../assets/plate1.jpg";
import bbq from "../assets/bbq.jpg";
import pork from "../assets/pork.jpg";
import styles from "../css/Landing.module.css";

function Slipper() {
  const delay = 2500;
  const images = [plate1, plate2, plate3, bbq, pork];
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className={styles["slideshow"]}>
      <div
        className={styles["slideshowSlider"]}
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        <img src={images[index]} className={styles.slide} key={index}></img>
      </div>
    </div>
  );
}
export default Slipper;
