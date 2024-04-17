import React, { useState } from 'react';
import TaskList from './TaskList';
import AddTaskForm from './AddTaskForm'; // Dodaj ten import
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text }]);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="app">
      <h1>Task Manager</h1>
      <TaskList tasks={tasks} removeTask={removeTask} />
      <AddTaskForm addTask={addTask} />
    </div>
  );
}

export default App;