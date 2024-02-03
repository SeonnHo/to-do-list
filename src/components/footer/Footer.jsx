import React from 'react';
import styles from './Footer.module.css';

export default function Footer({
  value,
  onChange,
  onKeyDown,
  onCompose,
  onClick,
}) {
  return (
    <footer className={styles.footer}>
      <div className={styles.inputBox}>
        <input
          className={styles.input}
          type="text"
          placeholder="Add Todo..."
          value={value}
          onChange={(e) => onChange(e)}
          onKeyDown={(e) => onKeyDown(e)}
          onCompositionStart={() => onCompose(true)}
          onCompositionEnd={() => onCompose(false)}
        />
        <button className={styles.addBtn} onClick={onClick}>
          Add
        </button>
      </div>
    </footer>
  );
}
