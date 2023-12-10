import React, { useState } from "react";
import "./CreateTodoList.css";
import TodoForm from "../TodoForm";

// Le composant pour créer la liste des tâches
const CreateTodoList = ({ setTodos }) => {
  const [showForm, setShowForm] = useState(false);

  // On affiche le formulaire pour ajouter une tâche ou un bouton pour ouvrir ce formulaire
  return (
    <div>
      {showForm ? (
        <TodoForm setTodos={setTodos} setShowForm={setShowForm} />
      ) : (
        <>
          <p>Ajouter une tache : </p>
          <button onClick={() => setShowForm(true)}>+</button>
        </>
      )}
    </div>
  );
};

export default CreateTodoList;
