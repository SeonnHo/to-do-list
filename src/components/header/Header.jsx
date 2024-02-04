import React, { useContext } from 'react';
import styles from './Header.module.css';
import { MdSunny } from 'react-icons/md';
import { FaMoon } from 'react-icons/fa';
import SelectListButton from './select_button/SelectListButton';
import { DarkModeContext } from '../../context/DarkModeContext';

export default function Header({ selected, onClick }) {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <header className={styles.header}>
      {darkMode ? (
        <MdSunny className={styles.lightMode} onClick={toggleDarkMode} />
      ) : (
        <FaMoon className={styles.darkMode} onClick={toggleDarkMode} />
      )}
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
