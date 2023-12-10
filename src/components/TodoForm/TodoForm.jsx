import React, { useState } from 'react';
import './TodoForm.css'

// Le composant de formulaire pour ajouter des tâches
const TodoForm = ({ setTodos, setShowForm }) => {
  const [title, setTitle] = useState('');

   // On gère la soumission du formulaire pour ajouter une nouvelle tâche
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    setTodos(prevTodos => [...prevTodos, { id: Date.now(), title, completed: false }]);
    setTitle('');
    setShowForm(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Nouvelle tache"
      />
      <button type="submit">Ajouter</button>
      <button type="button" onClick={() => setShowForm(false)}>Annuler</button>
    </form>
  );
};

export default TodoForm;
