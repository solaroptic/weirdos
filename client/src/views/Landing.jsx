import React, { useState } from "react";
import { MyContext } from "../utility/Context";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { GiMirrorMirror } from "react-icons/gi";
import styles from "../css/Landing.module.css";
import eightFour from "../assets/Rim4.avif";
import pit2 from "../assets/BBQ_Pit2.svg";
import mike2 from "../assets/mikeTop.avif";
import HomeDisplay from "./HomeDisplay";
import Admin from "./Admin";
import Menu from "./Menu";
import Login from "./Login";
import Nav from "../components/Nav";
import Reviews from "./Reviews";
import About from "./About";

const Landing = () => {
  const [section, setSection] = useState("home");
  const [isAdmin, setIsAdmin] = useState(false);

  const sendHome = () => {
    setSection("home");
  };
  return (
    <MyContext.Provider value={{ section, setSection, isAdmin, setIsAdmin }}>
      <Nav />
      <span className={styles["spinner-box"]}>
        <img
          src={eightFour}
          alt="Spoked-rim spinning"
          className={`${styles["spinner"]} ${styles.animate}`}
        />
      </span>
      <div className={styles["giantMike-div"]}>
        <img src={mike2} />
      </div>
      <div className={styles["triangle"]}></div>
      <svg class={styles.svg}>
        <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox">
          <path d="M0,1 L0,.18 C0.6,0.75,0.85,0.5,1,1"></path>
        </clipPath>
      </svg>

      <div class={styles.clipped}></div>
      <div className={`${styles["landing-container"]} ${styles.center}`}>
        <h1 className={styles["heading"]} onClick={sendHome}>
          <img src={pit2} className={styles["pits"]} />
          Weirdo's
          <img src={pit2} className={styles["pits"]} />
        </h1>
        {!isAdmin && section === "home" && <HomeDisplay />}
        {isAdmin && <Admin />}
        {section === "menu" && <Menu />}
        {section === "about" && <About />}
        {section === "admin" && <Login />}
        {section === "reviews" && <Reviews />}
        <section className={styles["icons"]}>
          <FaFacebook /> <FaInstagram /> <FaLinkedin />
          <GiMirrorMirror />
        </section>
      </div>
    </MyContext.Provider>
  );
};

export default Landing;
