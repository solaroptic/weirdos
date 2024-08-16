import React, { useContext } from "react";
import { MyContext } from "../utility/Context";
import styles from "../css/Landing.module.css";

const Nav = () => {
  const { setSection, section } = useContext(MyContext);
  const { setIsAdmin } = useContext(MyContext);
  const setPage = (e) => {
    setIsAdmin(false);
    setSection((prev) => e.target.id);
  };
  console.log(section);
  return (
    <div className={`${styles["nav-container"]} ${styles.navFoot}`}>
      <p
        className={styles["nav-links"]}
        id={"menu"}
        onClick={(e) => setPage(e)}
      >
        Menu
      </p>
      <p
        className={styles["nav-links"]}
        id={"about"}
        onClick={(e) => setPage(e)}
      >
        About
      </p>
      <p
        className={styles["nav-links"]}
        id={"reviews"}
        onClick={(e) => setPage(e)}
      >
        Reviews
      </p>
      <p
        className={styles["nav-links"]}
        id={"admin"}
        onClick={(e) => setPage(e)}
      >
        Admin
      </p>
    </div>
  );
};

export default Nav;
