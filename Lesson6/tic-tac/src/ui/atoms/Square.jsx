import React from "react";
import styles from "./Square.module.css";

export default function Square() {
  return (
    <div className={styles.square}>
      <p className={styles.text}>X</p>
    </div>
  );
}
