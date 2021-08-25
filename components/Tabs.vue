<template lang="pug">
  div
    .tabs.is-boxed.is-fullwidth
      ul
        template(v-for="city in defaultCities")
          template(v-if="selected == city.city_id")
            li.is-active
              a(@click="goto(city.city_id)") {{city.city_name}}
          template(v-else)
            li
              a(@click="goto(city.city_id)") {{city.city_name}}
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
    ...mapGetters(['defaultCities', 'selected']),
  },
  created() {
    const { params } = this.$route;
    this.selectedPath = params.id;
  },
  methods: {
    goto(id: number) {
      this.$store.dispatch('setSelected', id);
      this.$router.push(`/${id}`);
    },
  },
});
</script>

<style lang="css" scoped>
</style>
