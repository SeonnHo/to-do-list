import React, { useEffect, useState } from 'react';
import styles from './Card.module.css';
import Header from './header/Header';
import Main from './main/Main';

export default function Card() {
  const [selected, setSelected] = useState('all');

  const handleLoadList = (selected) => {
    switch (selected) {
      case 'all':
        setSelected('all');
        localStorage.select = 'all';
        break;
      case 'active':
        setSelected('active');
        localStorage.select = 'active';
        break;
      case 'completed':
        setSelected('completed');
        localStorage.select = 'completed';
        break;
      default:
        setSelected('all');
    }
  };

  useEffect(() => {
    if ('select' in localStorage) {
      setSelected(localStorage.select);
    } else {
      localStorage.select = 'all';
      setSelected('all');
    }
  }, []);

  return (
    <div className={styles.card}>
      <Header selected={selected} onClick={handleLoadList} />
      <Main selected={selected} />
    </div>
  );
}
