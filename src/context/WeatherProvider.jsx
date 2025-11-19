import { useState, useEffect } from 'react'
import { WeatherContext } from './WeatherContext'

export const WeatherProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('weather-favorites')
    return saved ? JSON.parse(saved) : []
  })

  const [history, setHistory] = useState([])

  useEffect(() => {
    localStorage.setItem('weather-favorites', JSON.stringify(favorites))
  }, [favorites])

  const addFavorite = (city) => {
    if (!favorites.includes(city)) {
      setFavorites(prev => [...prev, city])
    }
  }

  const removeFavorite = (city) => {
    setFavorites(prev => prev.filter(f => f !== city))
  }

  const addToHistory = (city) => {
    setHistory(prev => [city, ...prev.filter(h => h !== city)].slice(0, 5))
  }

  return (
    <WeatherContext.Provider value={{
      favorites, addFavorite, removeFavorite,
      history, addToHistory
    }}>
      {children}
    </WeatherContext.Provider>
  )
}