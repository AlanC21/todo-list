import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const TaskDetailPage = ({ tasks, setTasks }) => {
  // Obtiene el id de la tarea desde los parámetros de la URL
  const { id } = useParams();
  // Crea una instancia de useNavigate para manejar la navegación
  const navigate = useNavigate();
  // Encuentra la tarea correspondiente al id en la lista de tareas
  const task = tasks.find((task) => task.id === parseInt(id));

  // Manejo de tarea no encontrada
  if (!task) {
    return <p>Tarea no encontrada.</p>;
  }

  // Función para eliminar la tarea
  const handleDelete = () => {
    // Filtra la lista de tareas para eliminar la tarea seleccionada
    const updatedTasks = tasks.filter((task) => task.id !== parseInt(id));
    // Actualiza el estado de las tareas
    setTasks(updatedTasks);
    // Guarda la lista actualizada en el LocalStorage
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    // Redirige a la página de inicio
    navigate('/');
  };

  // Función para redirigir a la página de edición
  const handleEdit = () => {
    navigate(`/edit/${id}`);
  };

  // Determina el color del texto basado en el estado de la tarea
  const statusColor = {
    complete: 'text-green-500',
    inProgress: 'text-yellow-500',
    incomplete: 'text-red-500'
  };

  return (
    <div className="container mx-auto p-4 bg-white rounded-lg shadow-lg">
      {/* Título centrado */}
      <h1 className="text-2xl font-bold mb-4 text-center">{task.title}</h1>
      <p className="text-gray-700 mb-2">Descripción: {task.description}</p>
      <p className="text-gray-500">Fecha de creación: {task.createdAt}</p>
      <p className={`text-lg ${statusColor[task.status]}`}>Estado:
        {task.status === 'complete' ? 'Completa' :
          task.status === 'inProgress' ? 'En Progreso' :
            'Incompleta'}
      </p>

      <div className="mt-4">
        {/* Botón para volver a la página anterior */}
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-500 text-white py-2 px-4 rounded-lg mr-4"
        >
          Volver
        </button>

        {/* Botón para editar la tarea */}
        <button
          onClick={handleEdit}
          className="bg-yellow-500 text-white py-2 px-4 rounded-lg mr-4"
        >
          Editar
        </button>

        {/* Botón para borrar la tarea */}
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white py-2 px-4 rounded-lg"
        >
          Borrar Tarea
        </button>
      </div>
    </div>
  );
};

export default TaskDetailPage;
