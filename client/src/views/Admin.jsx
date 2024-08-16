import React, { useState, useContext } from "react";
import { MyContext } from "../utility/Context";
import { db } from "../utility/firebase-config";
import { doc, updateDoc } from "firebase/firestore";
import styles from "../css/Landing.module.css";

const Admin = () => {
  const [message, setmessage] = useState("");
  const [schedule, setschedule] = useState("");
  const [isError, setIsError] = useState(false);
  const { setIsAdmin } = useContext(MyContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsError(false);
    const messagesDoc = doc(db, "mikes", "messages");
    const newFields = { message: message, schedule: schedule };
    try {
      await updateDoc(messagesDoc, newFields);
      setIsAdmin(false);
    } catch (error) {
      console.error("Error updating document:", error);
      setIsError(true);
    }
  };

  return (
    <main className={`${styles["login-main"]} ${styles.center}`}>
      <form onSubmit={handleSubmit} className={`${styles["login-form"]}`}>
        <h2>Pit Master Update</h2>
        {isError && <p className="error">{"Failed to save!!!"}</p>}
        <div className={`${styles["login-div"]}`}>
          <label htmlFor="message">message:</label>
          <input
            type="text"
            id="message"
            value={message}
            onChange={(e) => setmessage(e.target.value)}
          />
        </div>
        <div className={`${styles["login-div"]}`}>
          <label htmlFor="schedule">schedule:</label>
          <input
            type="schedule"
            id="schedule"
            value={schedule}
            onChange={(e) => setschedule(e.target.value)}
          />
        </div>
        {isError && <p>Site did not update, try again...</p>}
        <button type="submit">Update</button>
      </form>
    </main>
  );
};

export default Admin;
