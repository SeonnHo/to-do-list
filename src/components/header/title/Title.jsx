import React, { useContext, useEffect, useState } from 'react';
import styles from './Title.module.css';
import { MdSunny, MdEdit, MdClose } from 'react-icons/md';
import { FaMoon } from 'react-icons/fa';
import { DarkModeContext } from '../../../context/DarkModeContext';
import { ReactComponent as ImgTodo } from '../../../assets/to_do_list.svg';

export default function Title() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const [title, setTitle] = useState('My To-do list');
  const [isChangingTitle, setIsChangingTitle] = useState(false);
  const [input, setInput] = useState('');
  const [isComposing, setIsComposing] = useState(false);

  const handleChangeTitleClick = () => {
    setIsChangingTitle((prev) => !prev);
  };

  const handleChangeInput = (e) => {
    setInput(e.target.value);
  };

  const handleCompose = (isComposing) => {
    setIsComposing(isComposing);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !isComposing) {
      handleDoneClick();
    }
  };

  const handleClose = () => {
    setIsChangingTitle((prev) => !prev);
    setInput('');
  };

  const handleDoneClick = () => {
    setTitle(input);
    setInput('');
    handleChangeTitleClick();
    localStorage.title = input;
  };

  useEffect(() => {
    if (!('title' in localStorage)) {
      localStorage.title = 'My To-do list';
    } else {
      setTitle(localStorage.title);
    }
  }, []);

  return (
    <div className={styles.container}>
      {isChangingTitle ? (
        <>
          <MdClose className={styles.close} onClick={handleClose} />
          <div className={styles['input-box']}>
            <div>
              <input
                type="text"
                placeholder="New Title..."
                value={input}
                onChange={(e) => handleChangeInput(e)}
                onKeyDown={(e) => handleKeyDown(e)}
                onCompositionStart={() => handleCompose(true)}
                onCompositionEnd={() => handleCompose(false)}
              />
            </div>
            <button className={styles.done} onClick={handleDoneClick}>
              <span>Done</span>
            </button>
          </div>
        </>
      ) : (
        <>
          <ImgTodo
            className={styles['to-do-image']}
            fill={darkMode ? 'white' : 'black'}
            width="6.25rem"
            height="6.25rem"
          />
          <div
            className={`${styles['title-box']} ${darkMode ? styles.dark : ''}`}
          >
            <MdEdit className={styles.edit} onClick={handleChangeTitleClick} />
            <h1 className={`${styles.title} ${darkMode ? styles['dark'] : ''}`}>
              {title}
            </h1>
          </div>
          {darkMode ? (
            <FaMoon className={styles.darkMode} onClick={toggleDarkMode} />
          ) : (
            <MdSunny className={styles.lightMode} onClick={toggleDarkMode} />
          )}
        </>
      )}
    </div>
  );
}
