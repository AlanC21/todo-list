import React from 'react';
import TaskList from '../components/TaskList';

const HomePage = ({ tasks }) => {
  return (
    <div>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default HomePage;
