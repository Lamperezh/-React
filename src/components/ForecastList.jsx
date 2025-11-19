export default function ForecastList({ forecast }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-8">
      {forecast.map((day, i) => (
        <div 
          key={i} 
          className="glass-effect rounded-2xl p-6 text-white text-center hover-lift fade-in"
          style={{ animationDelay: `${i * 0.1}s` }}
        >
          <p className="font-semibold text-lg mb-3">
            {new Date(day.dt * 1000).toLocaleDateString('uk-UA', { 
              weekday: 'short',
              day: 'numeric',
              month: 'short'
            })}
          </p>
          <img
            src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
            alt="forecast"
            className="w-16 h-16 mx-auto mb-3 drop-shadow-lg"
          />
          <p className="text-2xl font-bold mb-1">{Math.round(day.main.temp)}°</p>
          <p className="text-sm opacity-80 capitalize mb-2">{day.weather[0].description}</p>
          <div className="flex justify-center gap-4 text-xs opacity-70">
            <span>↓ {Math.round(day.main.temp_min)}°</span>
            <span>↑ {Math.round(day.main.temp_max)}°</span>
          </div>
        </div>
      ))}
    </div>
  )
}