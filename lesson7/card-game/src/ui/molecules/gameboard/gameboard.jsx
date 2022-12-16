import React from "react";
import styles from "./gameboard.module.css";
import Card from "../../atoms/card/card.jsx";

export default function gameboard() {
  return (
    <div className={styles.board}>
      <Card id="1" />
      <Card id="2" />
      <Card id="4" />
      <Card id="8" />
    </div>
  );
}
