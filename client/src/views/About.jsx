import React from "react";
import styles from "../css/Landing.module.css";
import mike from "../assets/mikeB.avif";

const About = () => {
  return (
    <main className={`${styles["about-main"]} ${styles.center}`}>
      <h3 className={`${styles["about-h3"]}`}>
        It all started when I bit into a smoked turkey leg crafted by a local
        pit master. I knew, right then and there, I'd have to sell some crack to
        buy a food truck. Oh, how that crack failed me. It ain't the 80s no
        more. Not even the 90s.
      </h3>
      <h3 className={`${styles["about-h3"]}`}>
        The local HEB had my back, though. Donnie hooked me up with a lawnmower
        he nicknamed "Ol' Bessie" and Gary Hamby threw some LEDs in a
        transformer's eyes and had me sell'em on E-Bay. Mowed some lawns and met
        some nerds... BAM! Weirdo's.
      </h3>
      <p className={`${styles["about-p"]}`}>email me at Branch@gmail.com</p>
      <div className={`${styles["containMike-div"]}`}>
        <img
          src={mike}
          alt="Mike in a Waldo suit"
          className={`${styles["aboutMike-img"]}`}
        />
      </div>
    </main>
  );
};

export default About;
