import React from "react";
import styles from "../css/Landing.module.css";
import plate2 from "../assets/plate2.jpg";
import plate3 from "../assets/plate3.jpg";
import plate1 from "../assets/plate1.jpg";
import bbq from "../assets/bbq.jpg";
import pork from "../assets/pork.jpg";

const MenuItem = ({ item, contents, price, shot }) => {
  const imgMap = { plate1, plate2, plate3, bbq, pork };
  const imagePath = imgMap[shot];
  console.log(imagePath);
  return (
    <main className={`${styles["menuItem-main"]} `}>
      <img className={`${styles["menu-img"]} `} src={imagePath} alt={item} />
      <h3>{item}</h3>
      <p>{contents}</p>
      <p>{price}</p>
    </main>
  );
};

export default MenuItem;
