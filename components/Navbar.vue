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
          )
          span(aria-hidden="true")
          span(aria-hidden="true")
          span(aria-hidden="true")
      #navbarContent.navbar-menu
        .navbar-start
        .navbar-end
</template>

<script lang="ts">
export default {
  name: 'Navbar',
};
</script>

<style lang="css" scoped>
</style>
