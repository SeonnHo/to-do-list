import React from 'react';
import styles from './ToDo.module.css';
import { FaTrashAlt } from 'react-icons/fa';

export default function ToDo({ todo, onChange }) {
  return (
    <div className={styles.todo}>
      <label>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={todo.isChecked}
          onChange={(e) => onChange.handleCheck(e, todo.id)}
        />
        <span className={styles.content}>{todo.content}</span>
      </label>
      <div
        className={styles.deletebox}
        onClick={() => onChange.handleDelete(todo.id)}
      >
        <FaTrashAlt className={styles.delete} />
      </div>
    </div>
  );
}
