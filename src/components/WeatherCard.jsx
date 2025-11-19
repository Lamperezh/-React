export default function WeatherCard({ weather }) {
  const icon = weather.weather[0].icon
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`
  const temp = Math.round(weather.main.temp)
  const gradientClass = temp > 20 ? 'weather-gradient-warm' : 'weather-gradient-cold'

  return (
    <div className={`${gradientClass} rounded-2xl shadow-2xl p-8 text-white hover-lift fade-in`}>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-4xl font-bold mb-2">{weather.name}</h2>
          <p className="text-xl opacity-90 capitalize">{weather.weather[0].description}</p>
          <p className="text-6xl font-bold my-4">{temp}°C</p>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span>🌡️ Відчувається</span>
              <span className="font-semibold">{Math.round(weather.main.feels_like)}°C</span>
            </div>
            <div className="flex items-center gap-2">
              <span>💧 Вологість</span>
              <span className="font-semibold">{weather.main.humidity}%</span>
            </div>
            <div className="flex items-center gap-2">
              <span>💨 Вітер</span>
              <span className="font-semibold">{Math.round(weather.wind.speed)} м/с</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📊 Тиск</span>
              <span className="font-semibold">{weather.main.pressure} hPa</span>
            </div>
          </div>
        </div>
        <div className="text-center">
          <img src={iconUrl} alt="weather" className="w-32 h-32 drop-shadow-2xl" />
          <p className="text-lg mt-2 font-semibold">
            {new Date().toLocaleDateString('uk-UA', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>
      </div>
    </div>
  )
}