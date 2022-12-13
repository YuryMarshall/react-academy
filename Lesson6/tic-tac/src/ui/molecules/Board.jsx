import React from "react";
import styles from "./Board.module.css";
import Square from "../atoms/Square.jsx";

export default function Board() {
  return (
    <div className={styles.board}>
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
    </div>
  );
}
