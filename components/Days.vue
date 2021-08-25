<template lang="pug">
  div
    .card
      header.card-header
        p.card-header-title.subtitle Siguientes 5 Dias
      .card-content
        template(v-for="day in days")
          .columns.is-mobile.is-gapless
            .column.is-one-quarter
              figure.image.is-64x64
                img(:src="getIcon(day.weather[0].icon)")
            .column.is-half
              p
                span.subtitle {{parseDate(day.dt, timezone)}}
                br
                span.is-size-6 {{day.weather[0].description}}
            .column
              p
                span.has-text-weight-bold {{comma(day.temp.max)}} /
                span   {{comma(day.temp.min)}}
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'daily_forecast',
  props: [
    'forecast',
    'timezone',
  ],
  data: () => ({
    days: [],
  }),
  watch: {
    async forecast() {
      this.days = this.forecast.slice(0, 5);
    },
  },
  methods: {
    comma(num: number) {
      return num.toFixed(1).toString().replace('.', ',');
    },
    getIcon(code: string) {
      return `https://openweathermap.org/img/wn/${code}@2x.png`;
    },
    parseDate(dt: number, tz: string) {
      const d = new Date(new Date((dt * 1000)).toLocaleString('en-EN', { timeZone: tz }));
      const months = [
        'Ene',
        'Feb',
        'Mar',
        'Abr',
        'May',
        'Jun',
        'Jul',
        'Ago',
        'Sep',
        'Oct',
        'Nov',
        'Dic',
      ];
      const days = [
        'Domingo',
        'Lunes',
        'Martes',
        'Miercoles',
        'Jueves',
        'Viernes',
        'Sabado',
      ];
      return `${days[d.getDay()]} ${d.getDate()} ${months[d.getMonth()]}`;
    },
  },
});
</script>

<style lang="css" scoped>
</style>
