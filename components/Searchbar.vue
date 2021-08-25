<template lang="pug">
  div
    .field.has-addons
      .control.has-icons-right.is-expanded
        input.input(type="search", placeholder="busca tu ciudad" v-model='search')
        span.icon.is-small.is-right
          i.fas.fa-search
      .control
        button.button.is-primary(
          type="submit"
          @click="searchTerm"
          ) Buscar
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import { ICity } from '~/interfaces';

export default Vue.extend({
  name: 'searchbar',
  data: () => ({
    search: '',
  }),
  computed: {
    ...mapGetters(['cities']),
  },
  methods: {
    searchTerm() {
      const city = this.cities
        .filter((v: ICity) => (v.city_name.toLowerCase() === this.search.toLowerCase()));
      this.$store.dispatch('setSearchResult', city);
    },
  },
});
</script>

<style lang="css" scoped>
</style>
