import { useState } from 'react'
import { Pencil, Trash2 } from 'lucide-react' // <- Importamos los íconos

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
            <h3 className={`text-lg font-medium ${task.completed ? 'line-through text-neutral-600' : 'text-black'}`}>
              {task.title}
            </h3>
            {task.description && (
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-sm text-neutral-800 hover:text-black mt-1 underline"
              >
                {isExpanded ? 'Ocultar' : 'Ver más'} →
              </button>
            )}
          </div>
        </div>

        <div className="flex gap-2 ml-4">
          <button
            onClick={() => setEditingTask(task)}
            className="text-yellow-600 hover:text-yellow-500"
            aria-label="Editar"
          >
            <Pencil size={18} />
          </button>
          <button
            onClick={() => deleteTask(task.id)}
            className="text-red-600 hover:text-red-500"
            aria-label="Eliminar"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
      
      {isExpanded && task.description && (
        <p className="mt-2 text-neutral-700 pl-8 border-l-2 border-primary-400">
          {task.description}
        </p>
      )}
    </div>
  )
}
