import React from "react";
import styles from "./gameboard.module.css";
import Card from "../../atoms/card/card.jsx";

export default function gameboard() {
  return (
    <div className={styles.board}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
