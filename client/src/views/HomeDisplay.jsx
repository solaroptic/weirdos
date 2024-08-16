import React from "react";
import styles from "../css/Landing.module.css";
import MessageBoard from "../components/MessageBoard";
// import bbq from "../assets/bbq.jpg";
import Slider from "../components/Slider";

const HomeDisplay = () => {
  return (
    <main className={`${styles["home-main"]} ${styles.center}`}>
      <section>
        <p className={`${styles["home-main-headline"]}`}>
          Hot, delicious, Texas bbq
        </p>
        <Slider />
        {/* <img src={bbq} alt="chopped brisket" /> */}
      </section>
      <aside>
        <MessageBoard />
      </aside>
    </main>
  );
};

export default HomeDisplay;
