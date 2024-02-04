import React, { useState } from 'react';
import styles from './Card.module.css';
import Header from './header/Header';
import Main from './main/Main';

export default function Card() {
  const [selected, setSelected] = useState('all');

  const handleLoadList = (selected) => {
    switch (selected) {
      case 'all':
        setSelected('all');
        break;
      case 'active':
        setSelected('active');
        break;
      case 'completed':
        setSelected('completed');
        break;
      default:
        setSelected('all');
    }
  };

  return (
    <div className={styles.card}>
      <Header selected={selected} onClick={handleLoadList} />
      <Main selected={selected} />
    </div>
  );
}
