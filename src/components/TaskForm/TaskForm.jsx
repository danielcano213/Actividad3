import { useState, useEffect } from 'react'

export default function TaskForm({ addTask, editingTask, updateTask }) {
  const [task, setTask] = useState({
    title: '',
    description: '',
    completed: false
  })

  useEffect(() => {
    if (editingTask) {
      setTask(editingTask)
    }
  }, [editingTask])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!task.title.trim()) return

    if (editingTask) {
      updateTask(task)
    } else {
      addTask(task)
    }
    setTask({ title: '', description: '', completed: false })
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6 bg-primary-100 p-4 rounded-lg shadow-soft">
      <input
        type="text"
        placeholder="Título de la tarea"
        className="w-full p-2 mb-2 border border-neutral-600 rounded bg-primary-50 text-black placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-white"
        value={task.title}
        onChange={(e) => setTask({ ...task, title: e.target.value })}
      />
      <textarea
        placeholder="Descripción (opcional)"
        className="w-full p-2 mb-2 border border-neutral-600 rounded bg-primary-50 text-black placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-white"
        value={task.description}
        onChange={(e) => setTask({ ...task, description: e.target.value })}
      />
      <button
        type="submit"
        className="w-full bg-primary-400 hover:bg-primary-300 text-black font-bold py-2 px-4 rounded shadow-soft transition"
      >
        {editingTask ? 'Actualizar Tarea' : 'Agregar Tarea'}
      </button>
    </form>
  )
}
