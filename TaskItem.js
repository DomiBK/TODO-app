import React from 'react';

function TaskItem({ task, removeTask }) {
  return (
    <li className="task-item">
      <span>{task.text}</span>
      <button onClick={() => removeTask(task.id)}>Usuń</button>
    </li>
  );
}

export default TaskItem;