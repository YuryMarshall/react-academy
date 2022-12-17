import React, { useState, useEffect } from "react";
import styles from "./gameboard.module.css";
import Card from "../../atoms/card/card.jsx";

const cardsArr = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
];
const pairCardsArr = [...cardsArr, ...cardsArr];

export default function Gameboard() {
  const [arrayCards, setArrayCards] = useState([]);

  const shuffle = (array) => {
    let currentIndex = array.length;
    let temporaryIndex;
    let randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryIndex = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryIndex;
    }
    return array;
  };
  useEffect(() => {
    setArrayCards(shuffle(pairCardsArr));
  }, []);
  console.log("state is" + arrayCards);
  return (
    <div className={styles.board}>
      {arrayCards.map((card, index: number) => (
        <Card id={card.id} key={index} />
      ))}
    </div>
  );
}
