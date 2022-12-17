import React, { useState } from "react";
import styles from "./card.module.css";

export default function Card(props) {
  const [isMain, setMain] = useState(true);
  const x = () => (isMain ? "card" : "card" + props.id);
  return (
    <div
      className={styles[x()]}
      onClick={() => (isMain ? setMain(false) : setMain(true))}
    ></div>
  );
}
