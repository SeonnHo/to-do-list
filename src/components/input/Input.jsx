import React, { useState } from 'react';
import styles from './Input.module.css';

export default function Input({ onClick }) {
  const [input, setInput] = useState('');
  const [isComposing, setIsComposing] = useState(false);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !isComposing) {
      onClick(input, setInput);
    }
  };

  const handleCompose = (isComposing) => {
    setIsComposing(isComposing);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.inputBox}>
        <input
          className={styles.input}
          type="text"
          placeholder="Add Todo..."
          value={input}
          onChange={(e) => handleInput(e)}
          onKeyDown={(e) => handleKeyDown(e)}
          onCompositionStart={() => handleCompose(true)}
          onCompositionEnd={() => handleCompose(false)}
        />
        <button
          className={styles.addBtn}
          onClick={() => onClick(input, setInput)}
        >
          Add
        </button>
      </div>
    </footer>
  );
}
