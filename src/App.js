import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TaskDetailPage from './pages/TaskDetailPage';
import NewTaskPage from './pages/NewTaskPage';
import EditTaskPage from './pages/EditTaskPage';

const getTasksFromLocalStorage = () => {
  const savedTasks = localStorage.getItem('tasks');
  return savedTasks ? JSON.parse(savedTasks) : [];
};

const App = () => {
  const [tasks, setTasks] = useState(getTasksFromLocalStorage());

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage tasks={tasks} />} />
        <Route path="/tasks/:id" element={<TaskDetailPage tasks={tasks} setTasks={setTasks} />} />
        <Route path="/new" element={<NewTaskPage addTask={addTask} />} />
        <Route path="/edit/:id" element={<EditTaskPage tasks={tasks} setTasks={setTasks} />} />
      </Routes>
    </Router>
  );
};

export default App;
