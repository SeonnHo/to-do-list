import React from 'react';
import styles from './Main.module.css';
import ToDo from './todo/ToDo';

export default function Main({ todos, selected, onChange }) {
  return (
    <main className={styles.main}>
      {todos.map((todo) => {
        if (selected.all) {
          return <ToDo key={todo.id} todo={todo} onChange={onChange} />;
        } else if (selected.active && todo.isChecked === false) {
          return <ToDo key={todo.id} todo={todo} onChange={onChange} />;
        } else if (selected.completed && todo.isChecked === true) {
          return <ToDo key={todo.id} todo={todo} onChange={onChange} />;
        }
        return null;
      })}
    </main>
  );
}
