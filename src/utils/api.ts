const OPEN_WEATHER_API_KEY = process.env.REACT_APP_API_KEY;

export interface OpenWEatherData {
	name: string
	main: {
		feels_like: number
		humidity: number
		pressure: number
		temp: number
		temp_max: number
		temp_min: number
	}
	weather: {
		description: string
		icon: string
		id: number
		main: string
	}[]
	wind: {
		deg: number
		speed: number
	}
}

export async function fetchOpenWeatherData(city: string): Promise<any> {
	const res = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPEN_WEATHER_API_KEY}`
	)

	if (!res.ok) {
		throw new Error('City not found')
	}

	const data: OpenWEatherData = await res.json()
	return data
}
