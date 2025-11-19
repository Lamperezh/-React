import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import WeatherCard from '../src/components/WeatherCard'

describe('WeatherCard', () => {
  const weather = {
    name: 'Київ',
    main: { temp: 15, feels_like: 14 },
    weather: [{ description: 'хмарно', icon: '03d' }]
  }

  test('відображає назву, температуру, опис', () => {
    render(<WeatherCard weather={weather} />)
    expect(screen.getByText('Київ')).toBeInTheDocument()
    expect(screen.getByText('15°C')).toBeInTheDocument()
    expect(screen.getByText(/хмарно/i)).toBeInTheDocument()
  })

  test('знімок', () => {
    const { container } = render(<WeatherCard weather={weather} />)
    expect(container).toMatchSnapshot()
  })
})