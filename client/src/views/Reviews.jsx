import React, { useEffect, useState } from "react";
import { db } from "../utility/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import styles from "../css/Landing.module.css";
import ReviewItem from "../components/ReviewItem";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const mikeCollectionRef = collection(db, "mikes");

  useEffect(() => {
    const getReviews = async () => {
      try {
        const data = await getDocs(mikeCollectionRef);
        console.log(data);
        const mikesDocs = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        const reviewDirty = mikesDocs
          .find(({ reviewsArray }) => reviewsArray)
          ?.reviewsArray.map((item) => item);
        setReviews(reviewDirty);
      } catch (error) {
        console.error("error fetching reviews:", error);
      }
    };
    getReviews();
  }, []);

  console.log(reviews);

  return (
    <div className={`${styles["reviews-main"]} ${styles.grid}`}>
      {reviews.map((each) => (
        <ReviewItem
          key={each.id}
          id={each.id}
          contents={each.contents}
          date={each.date}
        />
      ))}
    </div>
  );
};

export default Reviews;
