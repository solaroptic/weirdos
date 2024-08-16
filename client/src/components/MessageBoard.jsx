import React, { useEffect, useState } from "react";
import { db } from "../utility/firebase-config";
import { doc, updateDoc, collection, getDoc } from "firebase/firestore";
import styles from "../css/Landing.module.css";

const MessageBoard = () => {
  const [message, setMessage] = useState();
  const [schedule, setSchedule] = useState();

  useEffect(() => {
    const getMessages = async () => {
      try {
        const messagesDoc = doc(db, "mikes", "messages");
        const docSnapshot = await getDoc(messagesDoc);

        if (docSnapshot.exists()) {
          const data = docSnapshot.data();
          setMessage(data.message);
          setSchedule(data.schedule);
        } else {
          console.log("Messages not found!");
        }
      } catch (error) {
        console.error("Error getting document:", error);
        // Handle the error appropriately, e.g., display an error message
      }
    };
    getMessages();
  }, []);

  return (
    <div className={`${styles["messageBoard-main"]} ${styles.center}`}>
      {!message && <article>Hello friends! Welcome to Weirdo's</article>}
      {!message && (
        <article>Thursdays @ 11pm-1am Friday @ 8pm at The Cryin' Shame</article>
      )}
      <article>{message}</article>
      <article>{schedule}</article>
    </div>
  );
};

export default MessageBoard;
