import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TaskForm = ({ addTask, editTask, initialData }) => {
  // Estados del formulario
  const [title, setTitle] = useState(initialData?.title || '');
  const [description, setDescription] = useState(initialData?.description || '');
  const [status, setStatus] = useState(initialData?.status || 'incomplete');
  const navigate = useNavigate();

  // Efecto para inicializar los campos del formulario si hay datos iniciales
  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setDescription(initialData.description);
      setStatus(initialData.status);
    }
  }, [initialData]);

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Crea el objeto de tarea con los datos del formulario
    const taskData = {
      id: initialData ? initialData.id : Date.now(),
      title,
      description,
      createdAt: initialData ? initialData.createdAt : new Date().toISOString().slice(0, 10),
      status,
    };
    // Llama a la función correspondiente para añadir o editar la tarea
    if (editTask) {
      editTask(taskData);
    } else {
      addTask(taskData);
    }
    // Redirige a la página de inicio
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="container mx-auto p-4 bg-white rounded-lg shadow-lg">
      {/* Título centrado */}
      <h1 className="text-2xl font-bold mb-4 text-center">{initialData ? 'Editar Tarea' : 'Crear Nueva Tarea'}</h1>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Título</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Descripción</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Estado</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg"
        >
          <option value="incomplete">Incompleta</option>
          <option value="inProgress">En Progreso</option>
          <option value="complete">Completa</option>
        </select>
      </div>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg">
        {initialData ? 'Guardar Cambios' : 'Agregar Tarea'}
      </button>
    </form>
  );
};

export default TaskForm;
