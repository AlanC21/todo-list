import React from 'react';
import { Link } from 'react-router-dom';

const TaskList = ({ tasks }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Lista de Tareas</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <div key={task.id} className="bg-white p-4 rounded-lg shadow-lg">
              <Link to={`/tasks/${task.id}`} className="block">
                <h2 className="text-xl font-semibold text-blue-600">{task.title}</h2>
                <p className="text-gray-500 mt-2">{task.description}</p>
              </Link>
            </div>
          ))
        ) : (
          <p>No hay tareas disponibles. Crea una nueva tarea.</p>
        )}
      </div>
      <div className="mt-4">
        <Link to="/new" className="bg-blue-500 text-white py-2 px-4 rounded-lg">
          Crear Nueva Tarea
        </Link>
      </div>
    </div>
  );
};

export default TaskList;
