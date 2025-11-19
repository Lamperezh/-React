import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { WeatherProvider } from './context/WeatherProvider'
import Header from './components/Header'
import Home from './pages/Home'
import CityWeather from './pages/CityWeather'
import Favorites from './pages/Favorites'

export default function App() {
  return (
    <WeatherProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <Header />
            <main className="container mx-auto p-4">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/city/:cityName" element={<CityWeather />} />
                <Route path="/favorites" element={<Favorites />} />
              </Routes>
            </main>
          </div>
        </div>
      </BrowserRouter>
    </WeatherProvider>
  )
}