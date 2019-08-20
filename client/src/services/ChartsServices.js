

export default {
  prettyData(object){
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
         colour: '#6fcd98'
       }]
     }
  }

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
