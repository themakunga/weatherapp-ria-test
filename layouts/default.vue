<template lang="pug">
  div
    Navbar
    nuxt
</template>

<script lang="ts">
import Vue from 'vue';
import Navbar from '~/components/Navbar.vue';

export default Vue.extend({
  name: 'default_layout',
  components: {
    Navbar,
  },
  async fetch() {
    const { data } = await this.$axios.get('/static/cities.json');
    this.$store.dispatch('setCities', data);
  },
});
</script>

<style lang="css" scoped>
</style>
