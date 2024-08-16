import React, { useState, useContext } from "react";
import { MyContext } from "../utility/Context";
import styles from "../css/Landing.module.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState(false);
  const { isAdmin, setIsAdmin, setSection } = useContext(MyContext);
  // console.log(import.meta.env);
  const handleSubmit = (event) => {
    event.preventDefault();

    const admin = import.meta.env.VITE_WEIRDO_USER;
    const adminKey = import.meta.env.VITE_WEIRDO_KEY;
    // console.log(admin, adminKey, "🎲");
    if (username === admin && password === adminKey) {
      setIsAdmin(true);
      setSection("home");
    }
  };
  console.log(isAdmin, "🎭");
  return (
    <main className={`${styles["login-main"]} ${styles.center}`}>
      <form onSubmit={handleSubmit} className={`${styles["login-form"]}`}>
        <h2>Pit Master Login</h2>
        {/* {error && <p className="error">{error}</p>} */}
        <div className={`${styles["login-div"]}`}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className={`${styles["login-div"]}`}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </main>
  );
};

export default Login;
