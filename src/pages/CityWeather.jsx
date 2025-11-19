import { useParams, Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { WeatherContext } from '../context/WeatherContext'
import { fetchWeather, fetchForecast } from '../api/weatherApi'
import WeatherCard from '../components/WeatherCard'
import ForecastList from '../components/ForecastList'

export default function CityWeather() {
  const { cityName } = useParams()
  const { favorites, addFavorite, removeFavorite } = useContext(WeatherContext)
  const [weather, setWeather] = useState(null)
  const [forecast, setForecast] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const isFavorite = favorites.includes(cityName)

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true)
        const [w, f] = await Promise.all([
          fetchWeather(cityName),
          fetchForecast(cityName)
        ])
        setWeather(w)
        setForecast(f)
        setError('')
      } catch {
        setError('Не вдалося знайти погоду для цього міста. Спробуйте ще раз.')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [cityName])

  if (loading) return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="text-center text-white">
        <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-xl">Завантаження погоди...</p>
      </div>
    </div>
  )

  if (error) return (
    <div className="text-center text-white py-20">
      <div className="text-6xl mb-4">🌧️</div>
      <h2 className="text-2xl font-bold mb-4">Помилка</h2>
      <p className="text-xl mb-6">{error}</p>
      <Link 
        to="/" 
        className="inline-block bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover-lift"
      >
        Повернутись на головну
      </Link>
    </div>
  )

  return (
    <div className="fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-white hover:underline"
        >
          <span>←</span>
          На головну
        </Link>
        <button
          onClick={() => isFavorite ? removeFavorite(cityName) : addFavorite(cityName)}
          className={`px-6 py-3 rounded-xl font-semibold hover-lift transition-all ${
            isFavorite 
              ? 'bg-red-500 hover:bg-red-600 text-white' 
              : 'bg-white text-blue-600 hover:bg-blue-50'
          }`}
        >
          <span className="flex items-center gap-2">
            {isFavorite ? '❤️' : '🤍'}
            {isFavorite ? 'Видалити з обраного' : 'Додати в обране'}
          </span>
        </button>
      </div>
      
      <WeatherCard weather={weather} />
      
      <h2 className="text-3xl font-bold text-white mt-12 mb-6 text-center">
        Прогноз на 5 днів
      </h2>
      <ForecastList forecast={forecast} />
    </div>
  )
}