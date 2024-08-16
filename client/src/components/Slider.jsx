import React, { useState, useRef, useEffect } from "react";
import plate2 from "../assets/plate2.jpg";
import plate3 from "../assets/plate3.jpg";
import plate1 from "../assets/plate1.jpg";
import bbq from "../assets/bbq.jpg";
import pork from "../assets/pork.jpg";
import styles from "../css/Landing.module.css";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageRef = useRef(null);
  const images = [plate1, plate2, plate3, bbq, pork];

  const slideRight = () => {
    imageRef.current.classList.remove(`${styles.active}`);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    // Directly update image using currentIndex and images array
    imageRef.current.src = images[(currentIndex + 1) % images.length];
    imageRef.current.classList.add(`${styles.active}`);
  };

  useEffect(() => {
    imageRef.current.classList.add(`${styles.active}`);
    const intervalId = setInterval(() => slideRight(), 4000);

    return () => clearInterval(intervalId);
  }, []);

  // console.log(imageRef.current.src);
  // console.log(images[(currentIndex + 1) % images.length]);
  // imageRef.current.onload = () => {
  //   console.log(`Updated image src: ${imageRef.current.src}`);
  // };
  return (
    <div className={styles["slider-container"]}>
      <img
        ref={imageRef}
        src={images[currentIndex]}
        alt={`Hot sample of a ${images[currentIndex]} at Weirdo's`}
        // className={styles.active}
      />
    </div>
  );
};

export default Slider;

// const slideLeft = () => {
//   setCurrentIndex(
//     (prevIndex) => (prevIndex - 1 + images.length) % images.length
//   );
// };
{
  /* <button onClick={slideLeft}>&lt;</button>
   <button onClick={slideRight}>&gt;</button> */
}
