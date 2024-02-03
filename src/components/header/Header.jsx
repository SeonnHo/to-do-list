import React from 'react';
import styles from './Header.module.css';
// import { HiSun } from 'react-icons/hi';
import { FaMoon } from 'react-icons/fa';
import SelectListButton from './select_button/SelectListButton';

export default function Header({ selected, onClick }) {
  return (
    <header className={styles.header}>
      <FaMoon className={styles.darkMode} />
      <nav className={styles.nav}>
        <SelectListButton
          selected={selected.all}
          onClick={onClick.handleLoadAllList}
        >
          All
        </SelectListButton>
        <SelectListButton
          selected={selected.active}
          onClick={onClick.handleLoadActiveList}
        >
          Active
        </SelectListButton>
        <SelectListButton
          selected={selected.completed}
          onClick={onClick.handleLoadCompletedList}
        >
          Completed
        </SelectListButton>
      </nav>
    </header>
  );
}
