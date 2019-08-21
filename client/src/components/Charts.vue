<template lang="html">
  <div class="" >

    <line-chart v-if="chartData.chart.type === 'spline'" :currentCategory="currentCategory" :chartData="chartData" :chartTwoData="chartTwoData"/>

  </div>

</template>

<script>
import LineChart from './LineChart.vue'
export default {
  name: 'charts',
  props: ['currentCategory', 'chartData', 'chartTwoData'],

  components: {
    'line-chart': LineChart
  }
}
</script>

<style lang="css" scoped>
</style>
