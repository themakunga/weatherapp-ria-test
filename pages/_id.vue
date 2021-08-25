<template lang="pug">
  div
    .container
      span.is-size-6 {{dat.city_name}}, {{dat.country_full}}
      Hours(:forecast="forecast.hourly" :timezone="forecast.timezone")
      Days(:forecast="forecast.daily" :timezone="forecast.timezone")
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import { ICity } from '~/interfaces';
import Hours from '~/components/Hours.vue';
import Days from '~/components/Days.vue';

export default Vue.extend({
  name: 'city_weather',
  data: () => ({
    dat: [],
  }),
  computed: {
    ...mapGetters(['cities', 'forecast']),
  },
  components: {
    Hours,
    Days,
  },
  async created() {
    const cod = this.$route.params.id;
    this.dat = this.cities.find((v: ICity) => (v.city_id === parseInt(cod, 10)));
    this.$store.dispatch('getWeather', this.dat);
  },
});
</script>

<style lang="css" scoped>

</style>
