import { Middleware } from '@nuxt/types';

const intialData: Middleware = async ({ store, $axios }) => {
  const { data } = await $axios.get('https://gist.githubusercontent.com/themakunga/85160731fc15a6d8992eb12144ce8ab5/raw/1d22f0fab9db69198882d5eb561a3948e1b1de0c/cities.json');
  store.dispatch('setCities', data);
};

export default intialData;
