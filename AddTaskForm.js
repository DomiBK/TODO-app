import React, { useState } from 'react';

function AddTaskForm({ addTask }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTask(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Dodaj nowe zadanie"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Dodaj</button>
    </form>
  );
}

export default AddTaskForm;