import React from 'react';
import styles from './header.module.css';
import Example from '../../../features/components/switcher/switcher.jsx';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.head_container}>
        <div className={styles.title}>CDG-PRACTICE</div>
        <Example />
      </div>
    </header>
  );
}

export default Header;
