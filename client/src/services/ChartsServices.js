

export default {

  lineChart(object, valueKey, isDataReversed = false){
    if (!object.title) {
      return {};
    }

    const title = object.title
    let years = object.values.map((item)=> item.Year);
    let values = object.values.map((obj) => obj[valueKey]);

    if (isDataReversed) {
      years = years.reverse();
      values = values.reverse();
    }

    return {
      chart: {
        type: 'spline'
      },
      title: {
        text: title
      },
      subtitle: {
        text: object.source
      },
      xAxis: {
        title: {
          text: 'year'
        },
        categories: years
          },
      yAxis: {
        title: {
          text: object.yAxis
        },
      },

      series: [{
        name: title,
        data: values,
        colour: '#FF0000',
        animation:{
          enabled: true,
          duration: 5000
        }
      }],
    }
  },

  getCharts(object){
    const dataSets = []
    if (object.title === 'Oceans'){
      dataSets.push(this.lineChart(object.data, "CSIRO - Adjusted sea level (inches)"))
      dataSets.push(this.lineChart(object.dataTwo, "Mean", true));
    }
    return dataSets
  }



}
