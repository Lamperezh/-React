const API_KEY = '8d66285be8e9d55e5b2d5c711d782f42' 
const BASE_URL = 'https://api.openweathermap.org/data/2.5'

export const fetchWeather = async (city) => {
  const res = await fetch(
    `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric&lang=uk`
  )
  if (!res.ok) throw new Error('Місто не знайдено')
  return res.json()
}

export const fetchForecast = async (city) => {
  const res = await fetch(
    `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric&lang=uk`
  )
  if (!res.ok) throw new Error('Прогноз недоступний')
  const data = await res.json()
  return data.list.filter((_, i) => i % 8 === 0).slice(0, 5) // 5 днів
}