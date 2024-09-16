import React from 'react';
import TaskForm from '../components/TaskForm';

const NewTaskPage = ({ addTask }) => {
  return (
    <div>
      <TaskForm addTask={addTask} />
    </div>
  );
};

export default NewTaskPage;
