export interface ICity {
  city_id: number,
  city_name: string,
  state_code: string,
  country_code: string,
  country_full: string,
  lat: number,
  lon: number,
}

export interface ICoordinates {
  lat: number,
  lon: number,
}

export interface IWeather {
  id: number,
  main: string,
  description: string,
  icon: string,
}

export interface ITemperature {
  day: number,
  min: number,
  max: number,
  night: number,
  evening: number,
  morning: number,
}

export interface IFeelsLike {
  day: number,
  night: number,
  evening: number,
  morning: number,
}

export interface ICurrent {
  sunrise: Date,
  sunset: Date,
  temp: number,
  feels_like: number,
  presure: number,
  humidity: number,
  uvi: number,
  weather: IWeather,
}

export interface IDailyWeather extends ICurrent{
  temperatue: ITemperature,
  feelsLike: IFeelsLike,
  rain: number,
}

export interface IWeatherGet {
  timezone: string,
  current: ICurrent,
  hourly: IWeather[],
  daily: IDailyWeather[],

}

export interface IWeatherCity extends IWeatherGet{
  coordinates: ICoordinates,
  city_id: number,
}

export interface IPayload {
  city: ICity,
  weather: IWeatherGet,
}
