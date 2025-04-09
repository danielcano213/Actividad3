import { useState } from 'react'

export default function TaskItem({ task, deleteTask, toggleComplete, setEditingTask }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="bg-primary-100 p-4 rounded-lg shadow-soft transition-all duration-200 hover:shadow-glow">
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3 flex-1">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleComplete(task.id)}
            className="mt-1 h-5 w-5 rounded border-neutral-800 text-blue-400 bg-primary-300 cursor-pointer focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex-1">
            <h3 className={`text-lg ${task.completed ? 'line-through text-neutral-600' : 'text-white'}`}>
              {task.title}
            </h3>
            {task.description && (
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-sm text-neutral-800 hover:text-white mt-1"
              >
                {isExpanded ? 'Ocultar' : 'Ver más'} →
              </button>
            )}
          </div>
        </div>
        <div className="flex gap-2 ml-4">
          <button
            onClick={() => setEditingTask(task)}
            className="text-yellow-400 hover:text-yellow-300"
            aria-label="Editar"
          >
            ✏️
          </button>
          <button
            onClick={() => deleteTask(task.id)}
            className="text-red-400 hover:text-red-300"
            aria-label="Eliminar"
          >
            🗑️
          </button>
        </div>
      </div>
      
      {isExpanded && task.description && (
        <p className="mt-2 text-neutral-600 pl-8 border-l-2 border-primary-400">
          {task.description}
        </p>
      )}
    </div>
  )
}
