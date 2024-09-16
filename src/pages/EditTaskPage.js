import React from 'react';
import TaskForm from '../components/TaskForm';
import { useParams } from 'react-router-dom';

const EditTaskPage = ({ tasks, setTasks }) => {
  const { id } = useParams();
  const task = tasks.find((task) => task.id === parseInt(id));

  const editTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (
    <div>
      <TaskForm initialData={task} editTask={editTask} />
    </div>
  );
};

export default EditTaskPage;
