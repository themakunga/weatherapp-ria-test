<template lang="pug">
  div
    Navbar
    .container-fluid
      Tabs
      nuxt
</template>

<script lang="ts">
import Vue from 'vue';
import Navbar from '~/components/Navbar.vue';
import Tabs from '~/components/Tabs.vue';

export default Vue.extend({
  name: 'default_layout',
  components: {
    Navbar,
    Tabs,
  },
});
</script>

<style lang="css" scoped>
</style>
