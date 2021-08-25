<template lang="pug">
  div
    nav.navbar.is-info(
      role="navigation"
      aria-label="main navigation"
      )
      .navbar-brand
        router-link.navbar-item(to="/")
          .title.has-text-white Simple Weather
        a.navbar-burger(
          role="button"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarContent"
          :class="{'is-active': navbarActive }"
          @click="toggleNavbar"
          )
          span(aria-hidden="true")
          span(aria-hidden="true")
          span(aria-hidden="true")
      #navbarContent.navbar-menu(
        :class="{'is-active': navbarActive }"
        )
        .navbar-start
        .navbar-end
          .navbar-item
            Searchbar
          template(v-for="city in searchResult")
            .navbar-item
              a(@click="goto(city.city_id)") {{city.city_name}}, {{city.country_full}}
</template>
<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import Searchbar from '~/components/Searchbar.vue';

export default Vue.extend({
  name: 'Navbar',
  components: {
    Searchbar,
  },
  computed: {
    ...mapGetters(['navbarActive', 'searchResult']),
  },
  methods: {
    toggleNavbar() {
      this.$store.dispatch('toggleNavbar');
    },
    closeNavbar() {
      this.$store.dispatch('setNavbar', false);
    },
    goto(id: number) {
      this.closeNavbar();
      this.$router.push(`/${id}`);
    },
  },
});
</script>

<style lang="css" scoped>
</style>
