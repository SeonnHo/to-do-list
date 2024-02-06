import React, { useEffect, useState } from 'react';
import styles from './Main.module.css';
import ToDo from './todo/ToDo';
import Input from '../input/Input';

export default function Main({ selected }) {
  const [todos, setTodos] = useState([]);

  const handleAdd = (input, setInput) => {
    if (
      input === '' ||
      input === null ||
      input === undefined ||
      input === 'null'
    ) {
      return;
    }

    let id;
    if (todos.length === 0) {
      id = 1;
      setTodos([{ id, content: input, isChecked: false }]);
    } else {
      id = todos[todos.length - 1].id + 1;
      setTodos((todos) => [...todos, { id, content: input, isChecked: false }]);
    }
    localStorage.setItem(
      'list',
      JSON.stringify([...todos, { id, content: input, isChecked: false }])
    );
    setInput('');
  };

  const handleCheck = (e, id) => {
    setTodos((todos) =>
      [...todos].map((todo) =>
        todo.id === id ? { ...todo, isChecked: e.target.checked } : todo
      )
    );
    localStorage.setItem(
      'list',
      JSON.stringify(
        todos.map((todo) =>
          todo.id === id ? { ...todo, isChecked: e.target.checked } : todo
        )
      )
    );
  };

  const handleDelete = (id) => {
    setTodos((todos) => [...todos].filter((todo) => todo.id !== id));
    localStorage.setItem(
      'list',
      JSON.stringify(todos.filter((todo) => todo.id !== id))
    );
  };

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem('list'));
    if (list === null) {
      setTodos([]);
      localStorage.setItem('list', JSON.stringify([]));
    } else {
      setTodos(list);
    }
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles['todo-box']}>
        {todos.map((todo) => {
          if (selected === 'all') {
            return (
              <ToDo
                key={todo.id}
                todo={todo}
                onChange={{ handleCheck, handleDelete }}
              />
            );
          } else if (selected === 'active' && todo.isChecked === false) {
            return (
              <ToDo
                key={todo.id}
                todo={todo}
                onChange={{ handleCheck, handleDelete }}
              />
            );
          } else if (selected === 'completed' && todo.isChecked === true) {
            return (
              <ToDo
                key={todo.id}
                todo={todo}
                onChange={{ handleCheck, handleDelete }}
              />
            );
          }
          return null;
        })}
      </div>
      <Input onClick={handleAdd} />
    </main>
  );
}
