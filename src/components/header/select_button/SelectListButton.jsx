import React from 'react';
import styles from './SelectListButton.module.css';

export default function SelectListButton({ selected, onClick, children }) {
  return (
    <button
      className={`${styles.button} ${selected ? styles.selected : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
