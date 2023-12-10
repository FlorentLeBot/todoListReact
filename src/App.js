import React, { useState } from 'react';
import CreateTodoList from './components/CreateTodoList';
import TodoList from './components/TodoList';
import './App.css';

// Le composant principal App
const App = () => {
  const [todos, setTodos] = useState([]);

  // On calcule le nombre de tâches complétées
  const completedCount = todos.filter(todo => todo.completed).length;

  return (
    <div>
      <CreateTodoList setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <p>Nombre de tâches complétées : {completedCount}</p>
    </div>
  );
};

export default App;