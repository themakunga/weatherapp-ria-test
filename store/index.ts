/* eslint-disable no-shadow, no-param-reassign */
import {
  GetterTree,
  ActionTree,
  MutationTree,
} from 'vuex';

import { ICity, IWeatherCity, IPayload } from '~/interfaces';

export const state = () => ({
  cities: [] as ICity[],
  forecast: {} as IWeatherCity,
  selected: 3451190 as number,
  defaultCities: [
    {
      city_id: 3451190,
      city_name: 'Rio de Janeiro',
      state_code: '21',
      country_code: 'BR',
      country_full: 'Brazil',
      lat: -22.90278,
      lon: -43.2075,
    },
    {
      city_id: 1816670,
      city_name: 'Beijing',
      state_code: '22',
      country_code: 'CN',
      country_full: 'Paracel Islands',
      lat: 39.9075,
      lon: 116.39723,
    },
    {
      city_id: 5368361,
      city_name: 'Los Angeles',
      state_code: 'CA',
      country_code: 'US',
      country_full: 'United States',
      lat: 34.05223,
      lon: -118.24368,
    },
  ],
});

export type RootState = ReturnType<typeof state>;

export const getters: GetterTree<RootState, RootState> = {
  cities: (state) => (state.cities),
  defaultCities: (state) => (state.defaultCities),
  forecast: (state) => (state.forecast),
  selected: (state) => (state.selected),
};

export const mutations: MutationTree<RootState> = {
  SET_CITIES: (state, cities: ICity[]) => {
    state.cities = [...cities];
  },
  SET_SELECTED: (state, id: number) => {
    state.selected = id;
  },
  SET_WEATHER: (state, payload: IPayload) => {
    const { city, weather } = payload;
    state.forecast = {
      city_id: city.city_id,
      coordinates: {
        lat: city.lat,
        lon: city.lon,
      },
      timezone: weather.timezone!,
      current: {
        sunrise: weather.current.sunrise,
        sunset: weather.current.sunset,
        temp: weather.current.temp,
        feels_like: weather.current.feels_like,
        presure: weather.current.presure,
        humidity: weather.current.humidity,
        uvi: weather.current.feels_like,
        weather: weather.current.weather,
      },
      hourly: weather.hourly,
      daily: weather.daily,
    };
  },
};

export const actions: ActionTree<RootState, RootState> = {
  async setCities({ commit }, cities: ICity[]) {
    commit('SET_CITIES', cities);
  },
  async getWeather({ commit }, city: ICity) {
    const url = `https://api.openweathermap.org/data/2.5/onecall?appid=1f89da47fe4d0be6bbbf376af70bdb58&units=metric&exclude=minutely&lang=es&lat=${city.lat}&lon=${city.lon}`;
    const { data } = await this.$axios.get(url);
    const payload: IPayload = {
      city,
      weather: data,
    };
    commit('SET_WEATHER', payload);
  },
  setSelected({ commit }, id: number) {
    commit('SET_SELECTED', id);
  }
};
