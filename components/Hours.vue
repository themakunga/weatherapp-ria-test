<template lang="pug">
  div
    .card
      header.card-header
        p.card-header-title.subtitle Siguientes Horas
      .card-content
        .columns.is-mobile.is-gapless.is-vcentered.is-centered
          template(v-for="hour in forecast")
            .column.has-text-centered.is-one-quarter.is-horizontal-center
              .box
                p.is-3 {{comma(hour.temp)}}°C
                p.has-text-info {{hour.pop}}%
                p
                  figure.image.is-48x48.has-text-centered
                    img(:src="getIcon(hour.weather[0].icon)")
                p {{parseHour(hour.dt, timezone)}}
</template>

<script lang="ts">
export default {
  name: 'hourly_forecast',
  props: [
    'forecast',
    'timezone',
  ],
  methods: {
    comma(num: number) {
      return num.toFixed(1).toString().replace('.', ',');
    },
    getIcon(code: string) {
      return `http://openweathermap.org/img/wn/${code}@2x.png`;
    },
    parseHour(dt: number, tz: string) {
      const d = new Date(new Date((dt * 1000)).toLocaleString('en-US', { timeZone: tz }));
      const h = (d.getHours() < 10) ? `0${d.getHours()}` : d.getHours();
      const m = (d.getMinutes() < 10) ? `0${d.getMinutes()}` : d.getMinutes();
      return `${h}:${m}`;
    },
  },
};
</script>

<style lang="css" scoped>
.columns {
  overflow-x: scroll;
  overflow-y: hidden;
}
.is-horizontal-center {
  justify-content: center;
}
</style>
