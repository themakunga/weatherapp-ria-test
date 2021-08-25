<template lang="pug">
  div
    .container
      span.is-size-6 {{arr.city_name}}, {{arr.country_full}}
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
  name: 'index',
  computed: {
    ...mapGetters(['cities', 'forecast', 'selected']),
  },
  data: () => ({
    arr: [],
  }),
  components: {
    Hours,
    Days,
  },
  watch: {
    selected() {
      this.arr = this.cities.find((v: ICity) => (v.city_id === this.selected));
      this.$store.dispatch('getWeather', this.arr);
    },
  },
  created() {
    this.arr = this.cities.find((v: ICity) => (v.city_id === this.selected));
    this.$store.dispatch('getWeather', this.arr);
  },
});
</script>

<style lang="css" scoped>
</style>
