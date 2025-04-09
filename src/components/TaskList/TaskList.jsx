import TaskItem from '../TaskItem/TaskItem'

export default function TaskList({ tasks, deleteTask, toggleComplete, setEditingTask }) {
  return (
    <div className="space-y-4">
      {tasks.length === 0 ? (
        <p className="text-center text-neutral-600 py-4">
          No hay tareas registradas
        </p>
      ) : (
        tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleComplete={toggleComplete}
            setEditingTask={setEditingTask}
          />
        ))
      )}
    </div>
  )
}
