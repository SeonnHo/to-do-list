import React, { useState } from 'react';
import styles from './Card.module.css';
// import { HiSun } from 'react-icons/hi';
import { FaMoon } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';

export default function Card() {
  console.log('렌더링!!!!!!!!!!!!');
  const [todos, setTodos] = useState([]);

  const [input, setInput] = useState('');
  const [isComposing, setIsComposing] = useState(false);

  const [selected, setSelected] = useState({
    all: true,
    active: false,
    completed: false,
  });

  // 체크박스 핸들링
  const handleCheck = (e, id) => {
    console.log('handleCheck()');
    console.log(e.target.checked);
    setTodos((todos) =>
      [...todos].map((todo) =>
        todo.id === id ? { ...todo, isChecked: e.target.checked } : todo
      )
    );
  };

  // 투두리스트 삭제
  const handleDelete = (id) => {
    console.log('handleDelete()');
    setTodos((todos) => [...todos].filter((todo) => todo.id !== id));
  };

  // 인풋 이벤트 헨들링
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  // 엔터 입력 시 handleAdd 실행
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !isComposing) {
      handleAdd();
    }
  };

  // 투두리스트 추가
  const handleAdd = () => {
    console.log('handleAdd()');
    let id;
    if (todos.length === 0) {
      id = 1;
      setTodos([{ id, content: input, isChecked: false }]);
    } else {
      id = todos[todos.length - 1].id + 1;
      setTodos((todos) => [...todos, { id, content: input, isChecked: false }]);
    }
    setInput('');
  };

  // 모든 투두리스트 보여주기
  const handleLoadAllList = () => {
    console.log('handleLoadAllList()');
    setSelected({ all: true, active: false, completed: false });
  };

  // 체크안된 투두리스트 보여주기
  const handleLoadActiveList = () => {
    console.log('handleLoadActiveList()');
    setSelected({ all: false, active: true, completed: false });
  };

  // 체크된 투두리스트 보여주기
  const handleLoadCompletedList = () => {
    console.log('handleLoadCompletedList()');
    setSelected({ all: false, active: false, completed: true });
  };

  return (
    <div className={styles.card}>
      <header className={styles.header}>
        <FaMoon className={styles.darkMode} />
        <nav className={styles.nav}>
          <button
            className={`${styles.button} ${
              selected.all ? styles.selected : ''
            }`}
            onClick={handleLoadAllList}
          >
            All
          </button>
          <button
            className={`${styles.button} ${
              selected.active ? styles.selected : ''
            }`}
            onClick={handleLoadActiveList}
          >
            Active
          </button>
          <button
            className={`${styles.button} ${
              selected.completed ? styles.selected : ''
            }`}
            onClick={handleLoadCompletedList}
          >
            Completed
          </button>
        </nav>
      </header>
      <main className={styles.main}>
        {todos.map((todo) => {
          if (selected.all) {
            return (
              <div key={todo.id} className={styles.todo}>
                <label>
                  <input
                    className={styles.checkbox}
                    type="checkbox"
                    checked={todo.isChecked}
                    onChange={(e) => handleCheck(e, todo.id)}
                  />
                  <span className={styles.content}>{todo.content}</span>
                </label>
                <div
                  className={styles.deletebox}
                  onClick={() => handleDelete(todo.id)}
                >
                  <FaTrashAlt className={styles.delete} />
                </div>
              </div>
            );
          } else if (selected.active && todo.isChecked === false) {
            return (
              <div key={todo.id} className={styles.todo}>
                <label>
                  <input
                    className={styles.checkbox}
                    type="checkbox"
                    checked={todo.isChecked}
                    onChange={(e) => handleCheck(e, todo.id)}
                  />
                  <span className={styles.content}>{todo.content}</span>
                </label>
                <div
                  className={styles.deletebox}
                  onClick={() => handleDelete(todo.id)}
                >
                  <FaTrashAlt className={styles.delete} />
                </div>
              </div>
            );
          } else if (selected.completed && todo.isChecked === true) {
            return (
              <div key={todo.id} className={styles.todo}>
                <label>
                  <input
                    className={styles.checkbox}
                    type="checkbox"
                    checked={todo.isChecked}
                    onChange={(e) => handleCheck(e, todo.id)}
                  />
                  <span className={styles.content}>{todo.content}</span>
                </label>
                <div
                  className={styles.deletebox}
                  onClick={() => handleDelete(todo.id)}
                >
                  <FaTrashAlt className={styles.delete} />
                </div>
              </div>
            );
          }
          return null;
        })}
      </main>
      <footer className={styles.footer}>
        <div className={styles.inputBox}>
          <input
            className={styles.input}
            type="text"
            placeholder="Add Todo..."
            value={input}
            onChange={(e) => handleInput(e)}
            onKeyDown={(e) => handleKeyDown(e)}
            onCompositionStart={() => setIsComposing(true)}
            onCompositionEnd={() => setIsComposing(false)}
          />
          <button className={styles.addBtn} onClick={handleAdd}>
            Add
          </button>
        </div>
      </footer>
    </div>
  );
}
