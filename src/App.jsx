import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import TaskForm from './components/TaskForm/TaskForm'
import TaskList from './components/TaskList/TaskList'
import TaskFilter from './components/TaskFilter/TaskFilter'
import TaskStats from './components/TaskStats/TaskStats'

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks')
    return savedTasks ? JSON.parse(savedTasks) : []
  })

  const [filter, setFilter] = useState('all')
  const [editingTask, setEditingTask] = useState(null)

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: uuidv4(), completed: false }])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task =>
      task.id === updatedTask.id ? updatedTask : task
    ))
    setEditingTask(null)
  }

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed
    if (filter === 'completed') return task.completed
    return true
  })

  return (
    <div className="min-h-screen bg-primary-50 text-black px-6 py-8 max-w-4xl mx-auto text-[18px]">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Gestor de Tareas
      </h1>

      <Routes>
        <Route path="/" element={
          <div className="space-y-6">
            <TaskForm 
              addTask={addTask} 
              editingTask={editingTask}
              updateTask={updateTask}
            />
            <TaskFilter currentFilter={filter} setFilter={setFilter} />
            <TaskStats tasks={tasks} />
            <TaskList 
              tasks={filteredTasks} 
              deleteTask={deleteTask}
              toggleComplete={toggleComplete}
              setEditingTask={setEditingTask}
            />
          </div>
        }/>
      </Routes>
    </div>
  )
}

export default App
