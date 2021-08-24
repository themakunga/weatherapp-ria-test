import {
  GetterTree,
  ActionTree,
  MutationTree,
} from 'vuex';

import { ICity } from '~/interfaces';

export const state = () => ({
  cities: [] as ICity[],
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
};

export const mutations: MutationTree<RootState> = {
  SET_CITIES: (state, cities: ICity[]) => {
    state.cities = [...cities];
  },
};

export const actions: ActionTree<RootState, RootState> = {
  async setCities({ commit }, cities: ICity[]) {
    commit('SET_CITIES', cities);
  },
};
