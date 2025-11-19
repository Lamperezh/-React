import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { WeatherContext } from '../context/WeatherContext'
import SearchForm from '../components/SearchForm'

export default function Home() {
  const { history } = useContext(WeatherContext)

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-8">
      <div className="text-center text-white max-w-4xl mx-auto fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
          Погода в Україні
        </h1>
        <p className="text-xl md:text-2xl opacity-90 mb-12 max-w-2xl mx-auto">
          Точний прогноз погоди для будь-якого міста України. Дізнайтесь погоду зараз та на 5 днів вперед
        </p>
        
        <div className="max-w-2xl mx-auto mb-12">
          <SearchForm />
        </div>

        {history.length > 0 && (
          <div className="glass-effect rounded-2xl p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold mb-4">Нещодавні пошуки</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {history.map((city, index) => (
                <Link
                  key={index}
                  to={`/city/${city}`}
                  className="px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-all hover-lift"
                >
                  {city}
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-2xl mx-auto">
          {['Київ', 'Львів', 'Одеса', 'Харків'].map(city => (
            <Link
              key={city}
              to={`/city/${city}`}
              className="glass-effect rounded-xl p-4 hover-lift text-center"
            >
              {city}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}