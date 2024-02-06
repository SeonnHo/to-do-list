import React from 'react';
import styles from './ToDo.module.css';
import { FaTrashAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function ToDo({ todo, onChange }) {
  return (
    <motion.div
      className={styles.todo}
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 50, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
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
    </motion.div>
  );
}
