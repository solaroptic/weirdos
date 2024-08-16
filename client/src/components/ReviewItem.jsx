import React from "react";
import styles from "../css/Landing.module.css";
const ReviewItem = ({ id, contents, date }) => {
  return (
    <main className={`${styles["reviewItem-main"]} `}>
      <h3>{contents}</h3>
      <p className={`${styles["reviewItem-pId"]} `}>{id}</p>
      <p>{date}</p>
    </main>
  );
};

export default ReviewItem;
