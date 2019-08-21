<template>
  <div class="">

      <highcharts class="chart" :options="chartData[0]"></highcharts>
      <highcharts class="chart" :options="chartData[1]"></highcharts>


    </div>

</template>

<script>
export default {
  name: 'line-chart',
  props: ['currentCategory', 'chartData', 'chartTwoData'],
  data () {
    return {

      animationDuration: 10000,
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
