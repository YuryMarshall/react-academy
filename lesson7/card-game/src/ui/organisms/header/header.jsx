import React, { useState } from "react";
import styles from "./header.module.css";

export default function Header() {
  const [score, setScore] = useState(0);
  const clickHandler = () => {
    setScore(score + 1);
  };
  return (
    <header className={styles.header}>
      <button className={styles.title} onClick={clickHandler}>
        {score}
      </button>
    </header>
  );
}
