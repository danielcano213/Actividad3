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
    <div className="min-h-screen bg-primary-50 text-white px-4 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold my-6 text-center text-white">
        Gestor de Tareas
      </h1>
      
      <Routes>
        <Route path="/" element={
          <>
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
          </>
        }/>
      </Routes>
    </div>
  )
}

export default App
