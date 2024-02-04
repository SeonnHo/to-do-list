import React from 'react';
import styles from './Header.module.css';
import SelectListButton from './select_button/SelectListButton';
import Title from './title/Title';

export default function Header({ selected, onClick }) {
  return (
    <header className={styles.header}>
      <Title />
      <nav className={styles.nav}>
        <SelectListButton
          selected={selected === 'all'}
          onClick={() => onClick('all')}
        >
          All
        </SelectListButton>
        <SelectListButton
          selected={selected === 'active'}
          onClick={() => onClick('active')}
        >
          Active
        </SelectListButton>
        <SelectListButton
          selected={selected === 'completed'}
          onClick={() => onClick('completed')}
        >
          Completed
        </SelectListButton>
      </nav>
    </header>
  );
}
