import React, { useState, useEffect } from "react";
import styles from "./card.module.css";
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

export default function Card(props) {
  const [arrayCards, setArrayCards] = useState([]);
  const [openedCards, setOpenedCards] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);

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

  const flipCard = (index) => () => {
    if (
      openedCards[openedCards.length - 1] !== index &&
      openedCards.length < 2
    ) {
      setOpenedCards((opened) => [...opened, index]);
      setMoves((prevMove) => prevMove + 1);
    }
  };
  const gameRestart = () => {
    setOpenedCards([]);
    setMatched([]);
    setMoves(0);
    setArrayCards(shuffle(pairCardsArr));
  };
  useEffect(() => {
    if (openedCards < 2) return;
    const firstMatched = arrayCards[openedCards[0]];
    const secondMatched = arrayCards[openedCards[1]];
    if (secondMatched && firstMatched.id === secondMatched.id) {
      setMatched([...matched, secondMatched.id]);
    }
    if (openedCards.length === 2) setTimeout(() => setOpenedCards([]), 800);
  }, [openedCards]);
  if (matched.length < 8) {
    return (
      <div className={styles.board}>
        {arrayCards.map((item, index) => {
          let isFlipped = false;
          if (openedCards.includes(index)) isFlipped = true;
          if (matched.includes(item.id)) isFlipped = true;

          return (
            <div
              key={index}
              className={styles[`${isFlipped ? "card" + item.id : "card"}`]}
              onClick={flipCard(index)}
            >
              <p className={styles[`${isFlipped ? "nv" : "question"}`]}>?</p>
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div className={styles.win}>
        <div className={styles.controlls}>
          <p className={styles.score}>Your score: {moves / 2} attempts </p>
          <button className={styles.restart} onClick={gameRestart}>
            RESTART
          </button>
        </div>
        <p className={styles.sign}>Kalashnik Yury 2022</p>
      </div>
    );
  }
}
