export default function TaskStats({ tasks }) {
  const pendingTasks = tasks.filter(task => !task.completed).length

  return (
    <div className="mb-6 flex justify-between items-center px-4 py-3 bg-primary-300 rounded-lg shadow-soft">
      <div className="text-sm text-black">
        <span className="font-semibold">{pendingTasks}</span> tareas pendientes
      </div>
      <div className="text-sm text-black">
        Total: <span className="font-semibold">{tasks.length}</span>
      </div>
    </div>
  )
}
