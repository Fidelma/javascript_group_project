<template>
  <div class="">

      <highcharts class="chart" :options="chartData"></highcharts>
      <highcharts class="chart" :options="chartTwoData"></highcharts>


    </div>

</template>

<script>
export default {
  name: 'line-chart',
  props: ['currentCategory', 'chartData', 'chartTwoData'],
  data () {
    return {
      // title: '',
      // points: [10, 0, 8, 2, 6, 4, 5, 5],
      // chartType: 'Spline',
      // seriesColor: '#6fcd98',
      // colorInputIsSupported: null,
      // animationDuration: 1000,
      // chartOptions: {
      //   chart: {
      //     type: 'spline'
      //   },
      //   title: {
      //     text: 'Sin chart'
      //   },
      //   series: [{
      //     data: [10, 0, 8, 2, 6, 4, 5, 5],
      //     color: '#6fcd98'
      //   }]
      // }
      animationDuration: 1000,
    }
  }
}
</script>

<style scoped>
input[type="color"]::-webkit-color-swatch-wrapper {
  padding: 0;
}
#colorPicker {
  border: 0;
  padding: 0;
  margin: 0;
  width: 30px;
  height: 30px;
}
.numberInput {
  width: 30px;
}
</style>
