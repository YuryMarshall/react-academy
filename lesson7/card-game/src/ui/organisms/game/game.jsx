import React from "react";
import styles from "./game.module.css";
import Gameboard from "../../molecules/gameboard/gameboard.jsx";

export default function game() {
  return (
    <section className={styles.game}>
      <Gameboard />
    </section>
  );
}
