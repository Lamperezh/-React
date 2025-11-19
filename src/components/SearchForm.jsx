import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { WeatherContext } from '../context/WeatherContext'

export default function SearchForm() {
  const [city, setCity] = useState('')
  const [error, setError] = useState('')
  const { addToHistory } = useContext(WeatherContext)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmed = city.trim()
    if (!trimmed) {
      setError('Введіть назву міста')
      return
    }
    addToHistory(trimmed)
    navigate(`/city/${trimmed}`)
    setCity('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 w-full max-w-md">
      <div className="flex-1 relative">
        <input
          type="text"
          value={city}
          onChange={(e) => {
            setCity(e.target.value)
            setError('')
          }}
          placeholder="Введіть місто... (Київ, Львів, Одеса)"
          className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent backdrop-blur-sm"
        />
        {error && (
          <p className="absolute -bottom-6 left-0 text-red-200 text-sm">{error}</p>
        )}
      </div>
      <button
        type="submit"
        className="px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 hover-lift transition-all shadow-lg hover:shadow-xl"
      >
        <span className="flex items-center gap-2">
          🔍 Пошук
        </span>
      </button>
    </form>
  )
}