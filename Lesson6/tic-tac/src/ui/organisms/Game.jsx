import React from "react";
import Board from "../molecules/Board.jsx";
import styles from "./Game.module.css";

export default function Game() {
  return (
    <div className={styles.game}>
      <Board />
    </div>
  );
}
