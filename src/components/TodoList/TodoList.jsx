import React from "react";
import "./TodoList.css";

// Le composant pour afficher la liste des tâches
const TodoList = ({ todos, setTodos }) => {

  // On modifie l'état 'completed' d'une tâche
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // On supprime une tâche de la liste
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // On affiche chaque tâche avec une case à cocher et un bouton pour la supprimer
  return (
    <div>
      {todos.map((todo) => (
        <div
          key={todo.id}
          className={`todo-item ${todo.completed ? "completed" : ""}`}
        >
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleComplete(todo.id)}
          />
          {todo.title}
          <button onClick={() => deleteTodo(todo.id)}>Supprimer</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
