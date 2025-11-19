import { useContext } from 'react'
import { WeatherContext } from '../context/WeatherContext'
import { Link } from 'react-router-dom'

export default function Favorites() {
  const { favorites } = useContext(WeatherContext)

  if (favorites.length === 0) {
    return (
      <div className="text-center text-white py-20 fade-in">
        <div className="text-6xl mb-6">⭐</div>
        <h2 className="text-3xl font-bold mb-4">У вас немає обраних міст</h2>
        <p className="text-xl opacity-90 mb-8">Додавайте міста до обраних, щоб швидко переглядати погоду</p>
        <Link 
          to="/" 
          className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover-lift"
        >
          Знайти місто
        </Link>
      </div>
    )
  }

  return (
    <div className="fade-in">
      <h1 className="text-4xl font-bold text-white mb-8 text-center">Обрані міста</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {favorites.map((city, index) => (
          <Link
            key={city}
            to={`/city/${city}`}
            className="glass-effect rounded-2xl p-6 text-white hover-lift group"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🌤️</span>
              </div>
              <h3 className="text-2xl font-semibold mb-2">{city}</h3>
              <p className="opacity-70">Натисніть для перегляду погоди</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}