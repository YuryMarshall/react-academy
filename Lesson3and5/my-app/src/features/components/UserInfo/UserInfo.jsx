import React from 'react';
import styles from './userInfo.module.css';
import Card from '../../../ui/molecules/card.jsx';
import UserPhoto from '../UserPhoto/photo.jsx';

function UserInfo() {
  return (
    <div className={styles.wrapper}>
      <Card />
      <Card />
      <UserPhoto />
    </div>
  );
}

export default UserInfo;
