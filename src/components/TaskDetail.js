import React from 'react';

const TaskDetail = ({ task }) => {
  if (!task) return <p className="text-red-500">Tarea no encontrada</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-2">{task.title}</h1>
      <p className="text-gray-700 mb-2">{task.description}</p>
      <p className="text-gray-500">Fecha de creación: {task.createdAt}</p>
      <p className={`mt-2 text-lg ${task.status === 'complete' ? 'text-green-500' : 'text-yellow-500'}`}>
        Estado: {task.status === 'complete' ? 'Completada' : 'Incompleta'}
      </p>
    </div>
  );
};

export default TaskDetail;
