import {
  IHourlyForecast,
  LocationCoord,
  SelectedLocationWeatherTypes,
} from "../types/locationDataType";

export const getLocationCoords = (
  coords: GeolocationCoordinates
): LocationCoord => {
  return { lat: coords.latitude, lon: coords.longitude };
};

export const getLocationData = (
  locationRes: any
): SelectedLocationWeatherTypes => {
  return {
    current: {
      timezone: locationRes?.timezone,
      temp: Math.round(locationRes?.current.temp),
      feelsLike: Math.round(locationRes?.current.feels_like),
      humidity: locationRes?.current.humidity,
      weather: locationRes?.current.weather[0].main,
      icon: locationRes?.current.weather[0].icon,
      wind: locationRes?.current.wind_speed,
    },
    daily: locationRes?.daily.slice(1).map((day: any) => {
      return {
        date: day?.dt * 1000,
        day: Math.round(day?.temp.day),
        night: Math.round(day?.temp.night),
        icon: day?.weather[0].icon,
        weather: day?.weather[0].main,
      };
    }),
    hourly: locationRes?.hourly.map((hour: IHourlyForecast) => {
      return {
        temp: hour.temp,
        dt: new Date(hour.dt * 1000).getHours(),
      };
    }),
  };
};
