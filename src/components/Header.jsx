import { Link, useLocation } from 'react-router-dom'
import SearchForm from './SearchForm'

export default function Header() {
  const location = useLocation()

  return (
    <header className="glass-effect sticky top-0 z-50">
      <div className="container mx-auto p-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-2xl font-bold text-white hover-lift"
        >
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-blue-500 text-lg">☀️</span>
          </div>
          Погода UA
        </Link>
        
        <SearchForm />
        
        <nav className="flex gap-2 bg-white/20 rounded-xl p-1">
          <Link 
            to="/" 
            className={`px-4 py-2 rounded-lg transition-all ${
              location.pathname === '/' 
                ? 'bg-white text-blue-600 shadow-lg' 
                : 'text-white hover:bg-white/20'
            }`}
          >
            Головна
          </Link>
          <Link 
            to="/favorites" 
            className={`px-4 py-2 rounded-lg transition-all ${
              location.pathname === '/favorites' 
                ? 'bg-white text-blue-600 shadow-lg' 
                : 'text-white hover:bg-white/20'
            }`}
          >
            Обране
          </Link>
        </nav>
      </div>
    </header>
  )
}