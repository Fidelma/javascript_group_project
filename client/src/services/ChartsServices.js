

export default {
  prettySeaLevel(object){
    if(object.title){
     const title = object.title
     const years = object.values.map((item)=> item.Year)
     const values = object.values.map((obj) => obj["CSIRO - Adjusted sea level (inches)"])
     return {
       chart: {
         type: 'spline'
       },
       title: {
         text: title
       },
       xAxis: {
         title: {
           text: 'year'
         },
         categories: years
       },
       series: [{
         data: values,
         colour: '#6fcd98',
         animation:{
           enabled: true,
           duration: 5000
         }
       }]
     }
   } else {
     return {}
   }
  },

//   prettyGlobalTemperature(object){
//     if (object.title) {
//     const title = object.title
//     const years = object.values.map((item)=> item.Year).reverse()
//     const values = object.values.map((obj) => obj["Mean"]).reverse()
//     return {
//       chart: {
//         type: 'spline'
//       },
//       title: {
//         text: title
//       },
//       xAxis: {
//         title: {
//           text: 'year'
//         },
//         categories: years
//       },
//       series: [{
//         data: values,
//         colour: '#6fcd45',
//         animation:{
//           enabled: true,
//           duration: 5000
//         }
//       }],
//     }
//   } else {
//     return {}
//   }
// },
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
    xAxis: {
      title: {
        text: 'year'
      },
      categories: years
    },
    series: [{
      data: values,
      colour: '#6fcd45',
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
},


}
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
