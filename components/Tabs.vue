<template lang="pug">
  div
    .tabs.is-boxed.is-fullwidth
      ul
        template(v-for="city in defaultCities")
          li(:class="{ 'is-active': selectedPath == city.city_id }")
            router-link(:to="'/'+city.city_id") {{city.city_name}}
</template>

<script lang="ts">
import { mapGetters } from 'vuex';
import Vue from 'vue';

export default Vue.extend({
  name: 'tabs',
  data: () => ({
    selectedPath: '',
  }),
  computed: {
    ...mapGetters(['defaultCities']),
  },
  mounted() {
    const { path } = this.$route;
    this.selectedPath = path;
  },
});
</script>

<style lang="css" scoped>
</style>
