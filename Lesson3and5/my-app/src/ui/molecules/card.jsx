import React from 'react';
import styles from './card.module.css';

function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis magnam repellat laborum
        omnis molestiae! Voluptates quibusdam aspernatur iste doloremque. Qui animi porro soluta
        doloribus nulla nobis ex commodi odio nemo?
      </div>
    </div>
  );
}

export default Card;
