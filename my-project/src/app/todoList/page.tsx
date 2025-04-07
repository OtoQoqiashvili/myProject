"use client";

import React, { useState } from "react";
import styles from "./page.module.css";

export default function Page() {
  const [todos, setTodos] = useState<{ id: number; text: string; completed: boolean }[]>([]);
  const [text, setText] = useState("");

  const addTodo = () => {
    if (!text.trim()) return;
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
    setText("")
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className={styles.main_container}>
    <div className={styles.container}>
      <h1 className={styles.heading}>my To Do List</h1>
      <div className={styles.inputGroup}>
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Add a task..."
          className={styles.input}
        />
        <button onClick={addTodo} className={styles.addButton}>
          Add
        </button>
      </div>
      <ul className={styles.todoList}>
        {todos.map(todo => (
          <li key={todo.id} className={`${styles.todoItem} ${todo.completed ? styles.todoItem_completed : ""}`}>
            <span
              onClick={() => toggleTodo(todo.id)}
              className={`${styles.todoText} ${todo.completed ? styles.completed : ""}`}
            >
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className={styles.deleteButton}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}
