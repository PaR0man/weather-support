export interface LocationCity {
  name: string;
  coord: LocationCoord;
}

export interface LocationCoord {
  lat: number;
  lon: number;
}

export interface Weather {
  timezone: string;
  temp: number;
  feelsLike: number;
  humidity: number;
  weather: string;
  icon: string;
  wind: number;
}

export interface IDailyForecast {
  date: string;
  day: number;
  night: number;
  weather: string;
  icon: string;
}

export interface IHourlyForecast {
  dt: number;
  temp: number;
}

export interface SelectedLocationWeatherTypes {
  current: Weather;
  daily: IDailyForecast[];
  hourly: IHourlyForecast[];
}
