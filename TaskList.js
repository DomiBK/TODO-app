import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, removeTask }) {
  return (
    <ul className="task-list">
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} removeTask={removeTask} />
      ))}
    </ul>
  );
}

export default TaskList;