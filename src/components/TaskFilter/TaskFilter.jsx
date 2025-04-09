export default function TaskFilter({ currentFilter, setFilter }) {
  const filters = [
    { value: 'all', label: 'Todas' },
    { value: 'active', label: 'Activas' },
    { value: 'completed', label: 'Completadas' }
  ]

  return (
    <div className="mb-4 flex gap-2 justify-center">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => setFilter(filter.value)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            currentFilter === filter.value
              ? 'bg-primary-400 text-white shadow-glow'
              : 'bg-primary-100 text-neutral-800 hover:bg-primary-200'
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  )
}
