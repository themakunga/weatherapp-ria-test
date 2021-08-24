import { Middleware } from '@nuxt/types';

const intialData: Middleware = async ({ store, $axios }) => {
  const { data } = await $axios.get('/static/cities.json');
  store.dispatch('setCities', data);
};

export default intialData;
