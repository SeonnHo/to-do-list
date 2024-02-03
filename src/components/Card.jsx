import React, { useState } from 'react';
import styles from './Card.module.css';
import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';

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

  const handleCompose = (isComposing) => {
    setIsComposing(isComposing);
  };
  return (
    <div className={styles.card}>
      <Header
        selected={selected}
        onClick={{
          handleLoadAllList,
          handleLoadActiveList,
          handleLoadCompletedList,
        }}
      />
      <Main
        todos={todos}
        selected={selected}
        onChange={{ handleCheck, handleDelete }}
      />
      <Footer
        value={input}
        onChange={handleInput}
        onKeyDown={handleKeyDown}
        onCompose={handleCompose}
        onClick={handleAdd}
      />
    </div>
  );
}
