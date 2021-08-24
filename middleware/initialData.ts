import { Middleware } from '@nuxt/types';

const intialData: Middleware = ({store}) => {
  const cities = require('~/static/cities.json');
  store.dispatch('setCities', cities);
};

export default intialData;
