import React from "react";
import styles from "./gameboard.module.css";
import Card from "../../atoms/card/card.jsx";

export default function Gameboard() {
  return (
    <div className={styles.main}>
      <Card />
    </div>
  );
}
