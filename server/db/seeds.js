use climate_quiz;
db.dropDatabase();

db.questions.insertMany([
  {
    title: "Greenlands Ice Sheet",
    question: "How much ice melted from the Greenland ice sheet in July 2019",
    answerObject: [{
      correct: true,
      body: "217 billion tonnes"
    },
    {
      correct: true,
      body: "Equivalent of almost 30 times Loch Ness"
    },
    {
      correct: true,
      body: "86,800 olympic swimming pools"
    }
  ],
  categories: ["oceans"],
  answerBody: {
    title: "All of these are correct",
    facts: [{
      fact: "one",
      body: "217 billion tonnes of ice melted in July 2019."
    },
    {
      fact: "two",
      body: "The equivalent of ice that could fill loch lomond almost 30 times."
    },
    {
      fact: "three",
      body: "86,800 olympic swimming pools."
    }
    ],
    counter1URL:"<iframe height='100' src='https://www.theworldcounts.com/counters/why_is_climate_change_important/melting_ice_caps_facts/embed?background_color=white&color=black&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=14&token=da6cee8234591f3a2542678e4c4510fb48b62b69' style='border: none' width='300'></iframe>",
    image: "https://www.adn.com/resizer/E38reqe1JWUm5W_N6RNWZWoyiHE=/992x0/s3.amazonaws.com/arc-wordpress-client-uploads/adn/wp-content/uploads/2017/08/03093908/exit_glacier_online.jpg",
    imageDetail: "Exit gacier in Seward, Alaska is a visusal indicator of the effect that climate change is having on glaciers, the entry road to the glacier is marked with signposts detailing the year that the glacier stood at that marker."

  }
},
{
  title: "Trees",
  question: "What area of forest do humans destroy every hour?",
  answerObject: [{
    correct: true,
    body: "An area to hold 51 thousand ping pong tables"
  },
  {
    correct: false,
    body: "Murrayfield stadium every 20 minutes"
  },
  {
    correct: false,
    body: "An area the size of the meadows every day"
  }
],
categories: ["trees"],
answerBody: {
  title: "Roughly 214,500 square meters of trees are cut down every hour, this area would be able to hold 51 thousand ping pong tables",
  facts: [{
    fact: "one",
    body: "Murrayfield stadium every 2 seconds."
  },
  {
    fact: "two",
    body: "An area the size of the meadows 1min 10seconds"
  }
  ],
  counter1URL:"<iframe height='200' src='https://www.theworldcounts.com/counters/degradation_and_destruction_of_ecosystems/forestation_and_deforestation/embed?background_color=white&color=black&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=28&token=da6cee8234591f3a2542678e4c4510fb48b62b69' style='border: none' width='500'></iframe>",
  image: "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F9f1416db39e1da11af9f0014c2589dfb%2F960x0.jpg%3Ffit%3Dscale"
}
},
{
  title: "diet",
  question: "To make ONE average hamburger (200g):",
  answerObject: [{
    correct: false,
    body: "It takes the equivalent of 6 baths of water"
  },
  {
    correct: false,
    body: "It takes the same amount of energy to charge your phone for a year"
  },
  {
    correct: true,
    body: "It produces the equivalent pollutants as driving a car 200 miles"
  }
],
categories: ["diet", "water"],
answerBody: {
  title: "The correct answer is the space required for 1.4 ping pong tables",
  facts: [{
    fact: "one",
    body: "It actually takes the equivalent of 37 baths of water to make ONE average hamburger"
  },
  {
    fact: "two",
    body: "The amount of energy to charge your phone for 4.5 years"
  },
  {
    fact: "three",
    body: "It also contributes to the loss of xxx in deforestation,"
  }
  ],
  counter1URL:"<iframe height='200' src='https://www.theworldcounts.com/counters/world_food_consumption_statistics/world_meat_consumption_statistics/embed?background_color=white&color=black&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=28&token=da6cee8234591f3a2542678e4c4510fb48b62b69' style='border: none' width='500'></iframe>",
  image: "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F9f1416db39e1da11af9f0014c2589dfb%2F960x0.jpg%3Ffit%3Dscale"
}
},
])

db.categories.insertMany([
  {
    title: "Oceans",
    text: [
      {
        name: "one",
        body: "The sea level has been rising at an average rate of 1.7mm per year since the beginning of the 20th Century, this rise is down to the ocean temperature rising and the expansion of sea water and melting of ice sheets, glaciers and ice caps. "
      },
      {
        name: "two",
        body: "The ocean absorbs around a quarter of CO2 produced by human activities, this results in an increase in the acidity of the seawater which has a direct effect on marine plants and life."
      },
      {
        name: "three",
        body: "The increase in ocean temperatures means that the ocean is not able to hold as much oxygen."
      }
    ],
    data:{
      title: "Global Average Absolute Sea Level Change, 1880-2014",
      source: "Source: EPA's Climate Change Indicators in the United States: www.epa.gov/climatechange/indicators",
      values: [
  {
    "Year": 1880,
    "CSIRO - Adjusted sea level (inches)": 0,
    "CSIRO - Lower error bound (inches)": -0.952755905,
    "CSIRO - Upper error bound (inches)": 0.952755905,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1881,
    "CSIRO - Adjusted sea level (inches)": 0.220472441,
    "CSIRO - Lower error bound (inches)": -0.732283464,
    "CSIRO - Upper error bound (inches)": 1.173228345,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1882,
    "CSIRO - Adjusted sea level (inches)": -0.440944881,
    "CSIRO - Lower error bound (inches)": -1.346456692,
    "CSIRO - Upper error bound (inches)": 0.464566929,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1883,
    "CSIRO - Adjusted sea level (inches)": -0.232283464,
    "CSIRO - Lower error bound (inches)": -1.129921259,
    "CSIRO - Upper error bound (inches)": 0.66535433,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1884,
    "CSIRO - Adjusted sea level (inches)": 0.590551181,
    "CSIRO - Lower error bound (inches)": -0.283464567,
    "CSIRO - Upper error bound (inches)": 1.464566928,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1885,
    "CSIRO - Adjusted sea level (inches)": 0.531496062,
    "CSIRO - Lower error bound (inches)": -0.330708661,
    "CSIRO - Upper error bound (inches)": 1.393700786,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1886,
    "CSIRO - Adjusted sea level (inches)": 0.437007874,
    "CSIRO - Lower error bound (inches)": -0.381889763,
    "CSIRO - Upper error bound (inches)": 1.255905511,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1887,
    "CSIRO - Adjusted sea level (inches)": 0.216535433,
    "CSIRO - Lower error bound (inches)": -0.602362204,
    "CSIRO - Upper error bound (inches)": 1.03543307,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1888,
    "CSIRO - Adjusted sea level (inches)": 0.299212598,
    "CSIRO - Lower error bound (inches)": -0.519685039,
    "CSIRO - Upper error bound (inches)": 1.118110235,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1889,
    "CSIRO - Adjusted sea level (inches)": 0.362204724,
    "CSIRO - Lower error bound (inches)": -0.456692913,
    "CSIRO - Upper error bound (inches)": 1.181102361,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1890,
    "CSIRO - Adjusted sea level (inches)": 0.440944881,
    "CSIRO - Lower error bound (inches)": -0.374015748,
    "CSIRO - Upper error bound (inches)": 1.255905511,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1891,
    "CSIRO - Adjusted sea level (inches)": 0.374015748,
    "CSIRO - Lower error bound (inches)": -0.440944881,
    "CSIRO - Upper error bound (inches)": 1.188976377,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1892,
    "CSIRO - Adjusted sea level (inches)": 0.499999999,
    "CSIRO - Lower error bound (inches)": -0.31496063,
    "CSIRO - Upper error bound (inches)": 1.314960629,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1893,
    "CSIRO - Adjusted sea level (inches)": 0.685039369,
    "CSIRO - Lower error bound (inches)": -0.114173228,
    "CSIRO - Upper error bound (inches)": 1.484251967,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1894,
    "CSIRO - Adjusted sea level (inches)": 0.303149606,
    "CSIRO - Lower error bound (inches)": -0.547244094,
    "CSIRO - Upper error bound (inches)": 1.153543306,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1895,
    "CSIRO - Adjusted sea level (inches)": 0.767716535,
    "CSIRO - Lower error bound (inches)": -0.082677165,
    "CSIRO - Upper error bound (inches)": 1.618110235,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1896,
    "CSIRO - Adjusted sea level (inches)": 0.468503937,
    "CSIRO - Lower error bound (inches)": -0.366141732,
    "CSIRO - Upper error bound (inches)": 1.303149605,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1897,
    "CSIRO - Adjusted sea level (inches)": 0.673228346,
    "CSIRO - Lower error bound (inches)": -0.145669291,
    "CSIRO - Upper error bound (inches)": 1.492125983,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1898,
    "CSIRO - Adjusted sea level (inches)": 1.043307086,
    "CSIRO - Lower error bound (inches)": 0.267716535,
    "CSIRO - Upper error bound (inches)": 1.818897636,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1899,
    "CSIRO - Adjusted sea level (inches)": 1.338582676,
    "CSIRO - Lower error bound (inches)": 0.574803149,
    "CSIRO - Upper error bound (inches)": 2.102362203,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1900,
    "CSIRO - Adjusted sea level (inches)": 1.125984251,
    "CSIRO - Lower error bound (inches)": 0.405511811,
    "CSIRO - Upper error bound (inches)": 1.846456691,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1901,
    "CSIRO - Adjusted sea level (inches)": 1.110236219,
    "CSIRO - Lower error bound (inches)": 0.417322834,
    "CSIRO - Upper error bound (inches)": 1.803149604,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1902,
    "CSIRO - Adjusted sea level (inches)": 1.291338581,
    "CSIRO - Lower error bound (inches)": 0.61023622,
    "CSIRO - Upper error bound (inches)": 1.972440943,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1903,
    "CSIRO - Adjusted sea level (inches)": 1.606299211,
    "CSIRO - Lower error bound (inches)": 0.937007873,
    "CSIRO - Upper error bound (inches)": 2.275590549,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1904,
    "CSIRO - Adjusted sea level (inches)": 1.2007874,
    "CSIRO - Lower error bound (inches)": 0.53543307,
    "CSIRO - Upper error bound (inches)": 1.86614173,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1905,
    "CSIRO - Adjusted sea level (inches)": 0.984251968,
    "CSIRO - Lower error bound (inches)": 0.377952756,
    "CSIRO - Upper error bound (inches)": 1.590551179,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1906,
    "CSIRO - Adjusted sea level (inches)": 1.251968503,
    "CSIRO - Lower error bound (inches)": 0.673228346,
    "CSIRO - Upper error bound (inches)": 1.83070866,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1907,
    "CSIRO - Adjusted sea level (inches)": 1.196850392,
    "CSIRO - Lower error bound (inches)": 0.61023622,
    "CSIRO - Upper error bound (inches)": 1.783464565,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1908,
    "CSIRO - Adjusted sea level (inches)": 1.098425196,
    "CSIRO - Lower error bound (inches)": 0.527559055,
    "CSIRO - Upper error bound (inches)": 1.669291337,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1909,
    "CSIRO - Adjusted sea level (inches)": 1.27559055,
    "CSIRO - Lower error bound (inches)": 0.700787401,
    "CSIRO - Upper error bound (inches)": 1.850393699,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1910,
    "CSIRO - Adjusted sea level (inches)": 1.271653542,
    "CSIRO - Lower error bound (inches)": 0.696850393,
    "CSIRO - Upper error bound (inches)": 1.846456691,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1911,
    "CSIRO - Adjusted sea level (inches)": 1.598425195,
    "CSIRO - Lower error bound (inches)": 1.039370078,
    "CSIRO - Upper error bound (inches)": 2.157480313,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1912,
    "CSIRO - Adjusted sea level (inches)": 1.476377951,
    "CSIRO - Lower error bound (inches)": 0.917322834,
    "CSIRO - Upper error bound (inches)": 2.035433069,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1913,
    "CSIRO - Adjusted sea level (inches)": 1.547244093,
    "CSIRO - Lower error bound (inches)": 0.992125983,
    "CSIRO - Upper error bound (inches)": 2.102362203,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1914,
    "CSIRO - Adjusted sea level (inches)": 1.795275589,
    "CSIRO - Lower error bound (inches)": 1.251968503,
    "CSIRO - Upper error bound (inches)": 2.338582675,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1915,
    "CSIRO - Adjusted sea level (inches)": 2.10629921,
    "CSIRO - Lower error bound (inches)": 1.57086614,
    "CSIRO - Upper error bound (inches)": 2.641732281,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1916,
    "CSIRO - Adjusted sea level (inches)": 2.031496061,
    "CSIRO - Lower error bound (inches)": 1.519685038,
    "CSIRO - Upper error bound (inches)": 2.543307084,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1917,
    "CSIRO - Adjusted sea level (inches)": 1.854330707,
    "CSIRO - Lower error bound (inches)": 1.350393699,
    "CSIRO - Upper error bound (inches)": 2.358267714,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1918,
    "CSIRO - Adjusted sea level (inches)": 1.791338581,
    "CSIRO - Lower error bound (inches)": 1.291338581,
    "CSIRO - Upper error bound (inches)": 2.29133858,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1919,
    "CSIRO - Adjusted sea level (inches)": 1.854330707,
    "CSIRO - Lower error bound (inches)": 1.354330707,
    "CSIRO - Upper error bound (inches)": 2.354330706,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1920,
    "CSIRO - Adjusted sea level (inches)": 1.905511809,
    "CSIRO - Lower error bound (inches)": 1.393700786,
    "CSIRO - Upper error bound (inches)": 2.417322832,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1921,
    "CSIRO - Adjusted sea level (inches)": 1.988188974,
    "CSIRO - Lower error bound (inches)": 1.472440943,
    "CSIRO - Upper error bound (inches)": 2.503937005,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1922,
    "CSIRO - Adjusted sea level (inches)": 1.952755904,
    "CSIRO - Lower error bound (inches)": 1.433070865,
    "CSIRO - Upper error bound (inches)": 2.472440942,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1923,
    "CSIRO - Adjusted sea level (inches)": 1.999999998,
    "CSIRO - Lower error bound (inches)": 1.488188975,
    "CSIRO - Upper error bound (inches)": 2.511811021,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1924,
    "CSIRO - Adjusted sea level (inches)": 1.712598423,
    "CSIRO - Lower error bound (inches)": 1.196850392,
    "CSIRO - Upper error bound (inches)": 2.228346454,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1925,
    "CSIRO - Adjusted sea level (inches)": 1.791338581,
    "CSIRO - Lower error bound (inches)": 1.255905511,
    "CSIRO - Upper error bound (inches)": 2.326771651,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1926,
    "CSIRO - Adjusted sea level (inches)": 2.047244092,
    "CSIRO - Lower error bound (inches)": 1.507874014,
    "CSIRO - Upper error bound (inches)": 2.586614171,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1927,
    "CSIRO - Adjusted sea level (inches)": 2.003937006,
    "CSIRO - Lower error bound (inches)": 1.496062991,
    "CSIRO - Upper error bound (inches)": 2.511811021,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1928,
    "CSIRO - Adjusted sea level (inches)": 1.850393699,
    "CSIRO - Lower error bound (inches)": 1.366141731,
    "CSIRO - Upper error bound (inches)": 2.334645667,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1929,
    "CSIRO - Adjusted sea level (inches)": 1.905511809,
    "CSIRO - Lower error bound (inches)": 1.429133857,
    "CSIRO - Upper error bound (inches)": 2.381889761,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1930,
    "CSIRO - Adjusted sea level (inches)": 2.062992124,
    "CSIRO - Lower error bound (inches)": 1.590551179,
    "CSIRO - Upper error bound (inches)": 2.535433068,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1931,
    "CSIRO - Adjusted sea level (inches)": 2.047244092,
    "CSIRO - Lower error bound (inches)": 1.566929132,
    "CSIRO - Upper error bound (inches)": 2.527559053,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1932,
    "CSIRO - Adjusted sea level (inches)": 2.271653541,
    "CSIRO - Lower error bound (inches)": 1.803149604,
    "CSIRO - Upper error bound (inches)": 2.740157478,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1933,
    "CSIRO - Adjusted sea level (inches)": 2.440944879,
    "CSIRO - Lower error bound (inches)": 1.976377951,
    "CSIRO - Upper error bound (inches)": 2.905511808,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1934,
    "CSIRO - Adjusted sea level (inches)": 2.228346454,
    "CSIRO - Lower error bound (inches)": 1.759842518,
    "CSIRO - Upper error bound (inches)": 2.696850391,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1935,
    "CSIRO - Adjusted sea level (inches)": 2.448818895,
    "CSIRO - Lower error bound (inches)": 1.980314959,
    "CSIRO - Upper error bound (inches)": 2.917322832,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1936,
    "CSIRO - Adjusted sea level (inches)": 2.295275588,
    "CSIRO - Lower error bound (inches)": 1.83070866,
    "CSIRO - Upper error bound (inches)": 2.759842517,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1937,
    "CSIRO - Adjusted sea level (inches)": 2.519685037,
    "CSIRO - Lower error bound (inches)": 2.055118108,
    "CSIRO - Upper error bound (inches)": 2.984251965,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1938,
    "CSIRO - Adjusted sea level (inches)": 2.622047241,
    "CSIRO - Lower error bound (inches)": 2.157480313,
    "CSIRO - Upper error bound (inches)": 3.08661417,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1939,
    "CSIRO - Adjusted sea level (inches)": 2.826771651,
    "CSIRO - Lower error bound (inches)": 2.346456691,
    "CSIRO - Upper error bound (inches)": 3.307086611,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1940,
    "CSIRO - Adjusted sea level (inches)": 2.618110234,
    "CSIRO - Lower error bound (inches)": 2.18110236,
    "CSIRO - Upper error bound (inches)": 3.055118107,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1941,
    "CSIRO - Adjusted sea level (inches)": 3.098425194,
    "CSIRO - Lower error bound (inches)": 2.673228344,
    "CSIRO - Upper error bound (inches)": 3.523622044,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1942,
    "CSIRO - Adjusted sea level (inches)": 3.098425194,
    "CSIRO - Lower error bound (inches)": 2.673228344,
    "CSIRO - Upper error bound (inches)": 3.523622044,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1943,
    "CSIRO - Adjusted sea level (inches)": 3.098425194,
    "CSIRO - Lower error bound (inches)": 2.673228344,
    "CSIRO - Upper error bound (inches)": 3.523622044,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1944,
    "CSIRO - Adjusted sea level (inches)": 2.84645669,
    "CSIRO - Lower error bound (inches)": 2.425196848,
    "CSIRO - Upper error bound (inches)": 3.267716532,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1945,
    "CSIRO - Adjusted sea level (inches)": 2.95669291,
    "CSIRO - Lower error bound (inches)": 2.535433068,
    "CSIRO - Upper error bound (inches)": 3.377952752,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1946,
    "CSIRO - Adjusted sea level (inches)": 3.251968501,
    "CSIRO - Lower error bound (inches)": 2.834645666,
    "CSIRO - Upper error bound (inches)": 3.669291335,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1947,
    "CSIRO - Adjusted sea level (inches)": 3.374015745,
    "CSIRO - Lower error bound (inches)": 2.996062989,
    "CSIRO - Upper error bound (inches)": 3.7519685,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1948,
    "CSIRO - Adjusted sea level (inches)": 3.562992122,
    "CSIRO - Lower error bound (inches)": 3.19685039,
    "CSIRO - Upper error bound (inches)": 3.929133854,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1949,
    "CSIRO - Adjusted sea level (inches)": 3.51181102,
    "CSIRO - Lower error bound (inches)": 3.181102359,
    "CSIRO - Upper error bound (inches)": 3.842519681,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1950,
    "CSIRO - Adjusted sea level (inches)": 3.598425193,
    "CSIRO - Lower error bound (inches)": 3.287401571,
    "CSIRO - Upper error bound (inches)": 3.909448815,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1951,
    "CSIRO - Adjusted sea level (inches)": 3.972440941,
    "CSIRO - Lower error bound (inches)": 3.665354327,
    "CSIRO - Upper error bound (inches)": 4.279527555,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1952,
    "CSIRO - Adjusted sea level (inches)": 3.870078736,
    "CSIRO - Lower error bound (inches)": 3.56692913,
    "CSIRO - Upper error bound (inches)": 4.173228342,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1953,
    "CSIRO - Adjusted sea level (inches)": 4.043307082,
    "CSIRO - Lower error bound (inches)": 3.748031492,
    "CSIRO - Upper error bound (inches)": 4.338582673,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1954,
    "CSIRO - Adjusted sea level (inches)": 3.929133854,
    "CSIRO - Lower error bound (inches)": 3.64173228,
    "CSIRO - Upper error bound (inches)": 4.216535429,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1955,
    "CSIRO - Adjusted sea level (inches)": 3.964566925,
    "CSIRO - Lower error bound (inches)": 3.685039366,
    "CSIRO - Upper error bound (inches)": 4.244094484,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1956,
    "CSIRO - Adjusted sea level (inches)": 3.763779524,
    "CSIRO - Lower error bound (inches)": 3.488188973,
    "CSIRO - Upper error bound (inches)": 4.039370075,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1957,
    "CSIRO - Adjusted sea level (inches)": 4.291338578,
    "CSIRO - Lower error bound (inches)": 4.019685035,
    "CSIRO - Upper error bound (inches)": 4.562992121,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1958,
    "CSIRO - Adjusted sea level (inches)": 4.346456688,
    "CSIRO - Lower error bound (inches)": 4.086614169,
    "CSIRO - Upper error bound (inches)": 4.606299208,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1959,
    "CSIRO - Adjusted sea level (inches)": 4.358267712,
    "CSIRO - Lower error bound (inches)": 4.102362201,
    "CSIRO - Upper error bound (inches)": 4.614173224,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1960,
    "CSIRO - Adjusted sea level (inches)": 4.503937003,
    "CSIRO - Lower error bound (inches)": 4.244094484,
    "CSIRO - Upper error bound (inches)": 4.763779523,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1961,
    "CSIRO - Adjusted sea level (inches)": 4.748031491,
    "CSIRO - Lower error bound (inches)": 4.488188972,
    "CSIRO - Upper error bound (inches)": 5.007874011,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1962,
    "CSIRO - Adjusted sea level (inches)": 4.543307082,
    "CSIRO - Lower error bound (inches)": 4.283464563,
    "CSIRO - Upper error bound (inches)": 4.803149601,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1963,
    "CSIRO - Adjusted sea level (inches)": 4.480314956,
    "CSIRO - Lower error bound (inches)": 4.220472437,
    "CSIRO - Upper error bound (inches)": 4.740157475,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1964,
    "CSIRO - Adjusted sea level (inches)": 4.169291334,
    "CSIRO - Lower error bound (inches)": 3.905511807,
    "CSIRO - Upper error bound (inches)": 4.433070862,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1965,
    "CSIRO - Adjusted sea level (inches)": 4.610236216,
    "CSIRO - Lower error bound (inches)": 4.346456688,
    "CSIRO - Upper error bound (inches)": 4.874015743,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1966,
    "CSIRO - Adjusted sea level (inches)": 4.397637791,
    "CSIRO - Lower error bound (inches)": 4.137795271,
    "CSIRO - Upper error bound (inches)": 4.65748031,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1967,
    "CSIRO - Adjusted sea level (inches)": 4.452755901,
    "CSIRO - Lower error bound (inches)": 4.196850389,
    "CSIRO - Upper error bound (inches)": 4.708661413,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1968,
    "CSIRO - Adjusted sea level (inches)": 4.484251964,
    "CSIRO - Lower error bound (inches)": 4.220472437,
    "CSIRO - Upper error bound (inches)": 4.748031491,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1969,
    "CSIRO - Adjusted sea level (inches)": 4.751968499,
    "CSIRO - Lower error bound (inches)": 4.476377948,
    "CSIRO - Upper error bound (inches)": 5.02755905,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1970,
    "CSIRO - Adjusted sea level (inches)": 4.67716535,
    "CSIRO - Lower error bound (inches)": 4.401574799,
    "CSIRO - Upper error bound (inches)": 4.9527559,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1971,
    "CSIRO - Adjusted sea level (inches)": 4.881889759,
    "CSIRO - Lower error bound (inches)": 4.610236216,
    "CSIRO - Upper error bound (inches)": 5.153543302,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1972,
    "CSIRO - Adjusted sea level (inches)": 5.240157475,
    "CSIRO - Lower error bound (inches)": 4.968503932,
    "CSIRO - Upper error bound (inches)": 5.511811018,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1973,
    "CSIRO - Adjusted sea level (inches)": 5.003937003,
    "CSIRO - Lower error bound (inches)": 4.736220468,
    "CSIRO - Upper error bound (inches)": 5.271653538,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1974,
    "CSIRO - Adjusted sea level (inches)": 5.472440939,
    "CSIRO - Lower error bound (inches)": 5.204724404,
    "CSIRO - Upper error bound (inches)": 5.740157474,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1975,
    "CSIRO - Adjusted sea level (inches)": 5.409448813,
    "CSIRO - Lower error bound (inches)": 5.145669286,
    "CSIRO - Upper error bound (inches)": 5.673228341,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1976,
    "CSIRO - Adjusted sea level (inches)": 5.370078735,
    "CSIRO - Lower error bound (inches)": 5.1023622,
    "CSIRO - Upper error bound (inches)": 5.63779527,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1977,
    "CSIRO - Adjusted sea level (inches)": 5.303149601,
    "CSIRO - Lower error bound (inches)": 5.043307081,
    "CSIRO - Upper error bound (inches)": 5.56299212,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1978,
    "CSIRO - Adjusted sea level (inches)": 5.555118105,
    "CSIRO - Lower error bound (inches)": 5.291338577,
    "CSIRO - Upper error bound (inches)": 5.818897632,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1979,
    "CSIRO - Adjusted sea level (inches)": 5.362204719,
    "CSIRO - Lower error bound (inches)": 5.098425192,
    "CSIRO - Upper error bound (inches)": 5.625984246,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1980,
    "CSIRO - Adjusted sea level (inches)": 5.598425191,
    "CSIRO - Lower error bound (inches)": 5.34251968,
    "CSIRO - Upper error bound (inches)": 5.854330703,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1981,
    "CSIRO - Adjusted sea level (inches)": 6.086614167,
    "CSIRO - Lower error bound (inches)": 5.830708655,
    "CSIRO - Upper error bound (inches)": 6.342519679,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1982,
    "CSIRO - Adjusted sea level (inches)": 5.858267711,
    "CSIRO - Lower error bound (inches)": 5.610236215,
    "CSIRO - Upper error bound (inches)": 6.106299206,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1983,
    "CSIRO - Adjusted sea level (inches)": 6.188976372,
    "CSIRO - Lower error bound (inches)": 5.93307086,
    "CSIRO - Upper error bound (inches)": 6.444881883,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1984,
    "CSIRO - Adjusted sea level (inches)": 6.153543301,
    "CSIRO - Lower error bound (inches)": 5.905511805,
    "CSIRO - Upper error bound (inches)": 6.401574797,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1985,
    "CSIRO - Adjusted sea level (inches)": 5.74803149,
    "CSIRO - Lower error bound (inches)": 5.499999994,
    "CSIRO - Upper error bound (inches)": 5.996062986,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1986,
    "CSIRO - Adjusted sea level (inches)": 5.771653537,
    "CSIRO - Lower error bound (inches)": 5.523622042,
    "CSIRO - Upper error bound (inches)": 6.019685033,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1987,
    "CSIRO - Adjusted sea level (inches)": 5.795275585,
    "CSIRO - Lower error bound (inches)": 5.551181097,
    "CSIRO - Upper error bound (inches)": 6.039370073,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1988,
    "CSIRO - Adjusted sea level (inches)": 5.980314955,
    "CSIRO - Lower error bound (inches)": 5.732283459,
    "CSIRO - Upper error bound (inches)": 6.22834645,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1989,
    "CSIRO - Adjusted sea level (inches)": 6.157480309,
    "CSIRO - Lower error bound (inches)": 5.905511805,
    "CSIRO - Upper error bound (inches)": 6.409448812,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1990,
    "CSIRO - Adjusted sea level (inches)": 6.232283458,
    "CSIRO - Lower error bound (inches)": 5.972440939,
    "CSIRO - Upper error bound (inches)": 6.492125978,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1991,
    "CSIRO - Adjusted sea level (inches)": 6.334645663,
    "CSIRO - Lower error bound (inches)": 6.074803143,
    "CSIRO - Upper error bound (inches)": 6.594488182,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1992,
    "CSIRO - Adjusted sea level (inches)": 6.35826771,
    "CSIRO - Lower error bound (inches)": 6.094488183,
    "CSIRO - Upper error bound (inches)": 6.622047237,
    "NOAA - Adjusted sea level (inches)": ""
  },
  {
    "Year": 1993,
    "CSIRO - Adjusted sea level (inches)": 6.291338576,
    "CSIRO - Lower error bound (inches)": 6.027559049,
    "CSIRO - Upper error bound (inches)": 6.555118104,
    "NOAA - Adjusted sea level (inches)": 6.297493046
  },
  {
    "Year": 1994,
    "CSIRO - Adjusted sea level (inches)": 6.499999993,
    "CSIRO - Lower error bound (inches)": 6.236220466,
    "CSIRO - Upper error bound (inches)": 6.763779521,
    "NOAA - Adjusted sea level (inches)": 6.310933553
  },
  {
    "Year": 1995,
    "CSIRO - Adjusted sea level (inches)": 6.618110229,
    "CSIRO - Lower error bound (inches)": 6.354330702,
    "CSIRO - Upper error bound (inches)": 6.881889757,
    "NOAA - Adjusted sea level (inches)": 6.452568661
  },
  {
    "Year": 1996,
    "CSIRO - Adjusted sea level (inches)": 6.787401568,
    "CSIRO - Lower error bound (inches)": 6.523622041,
    "CSIRO - Upper error bound (inches)": 7.051181095,
    "NOAA - Adjusted sea level (inches)": 6.62763131
  },
  {
    "Year": 1997,
    "CSIRO - Adjusted sea level (inches)": 7.066929127,
    "CSIRO - Lower error bound (inches)": 6.803149599,
    "CSIRO - Upper error bound (inches)": 7.330708654,
    "NOAA - Adjusted sea level (inches)": 6.733920367
  },
  {
    "Year": 1998,
    "CSIRO - Adjusted sea level (inches)": 6.665354324,
    "CSIRO - Lower error bound (inches)": 6.393700781,
    "CSIRO - Upper error bound (inches)": 6.937007867,
    "NOAA - Adjusted sea level (inches)": 6.865806069
  },
  {
    "Year": 1999,
    "CSIRO - Adjusted sea level (inches)": 7.011811016,
    "CSIRO - Lower error bound (inches)": 6.736220466,
    "CSIRO - Upper error bound (inches)": 7.287401567,
    "NOAA - Adjusted sea level (inches)": 6.848689771
  },
  {
    "Year": 2000,
    "CSIRO - Adjusted sea level (inches)": 7.062992119,
    "CSIRO - Lower error bound (inches)": 6.791338576,
    "CSIRO - Upper error bound (inches)": 7.334645662,
    "NOAA - Adjusted sea level (inches)": 6.920582014
  },
  {
    "Year": 2001,
    "CSIRO - Adjusted sea level (inches)": 7.287401567,
    "CSIRO - Lower error bound (inches)": 7.019685032,
    "CSIRO - Upper error bound (inches)": 7.555118103,
    "NOAA - Adjusted sea level (inches)": 7.087460011
  },
  {
    "Year": 2002,
    "CSIRO - Adjusted sea level (inches)": 7.381889756,
    "CSIRO - Lower error bound (inches)": 7.110236213,
    "CSIRO - Upper error bound (inches)": 7.653543299,
    "NOAA - Adjusted sea level (inches)": 7.319697525
  },
  {
    "Year": 2003,
    "CSIRO - Adjusted sea level (inches)": 7.759842512,
    "CSIRO - Lower error bound (inches)": 7.484251961,
    "CSIRO - Upper error bound (inches)": 8.035433063,
    "NOAA - Adjusted sea level (inches)": 7.488352718
  },
  {
    "Year": 2004,
    "CSIRO - Adjusted sea level (inches)": 7.740157472,
    "CSIRO - Lower error bound (inches)": 7.464566922,
    "CSIRO - Upper error bound (inches)": 8.015748023,
    "NOAA - Adjusted sea level (inches)": 7.507932839
  },
  {
    "Year": 2005,
    "CSIRO - Adjusted sea level (inches)": 7.74409448,
    "CSIRO - Lower error bound (inches)": 7.472440937,
    "CSIRO - Upper error bound (inches)": 8.015748023,
    "NOAA - Adjusted sea level (inches)": 7.644563144
  },
  {
    "Year": 2006,
    "CSIRO - Adjusted sea level (inches)": 7.917322827,
    "CSIRO - Lower error bound (inches)": 7.645669284,
    "CSIRO - Upper error bound (inches)": 8.18897637,
    "NOAA - Adjusted sea level (inches)": 7.697420009
  },
  {
    "Year": 2007,
    "CSIRO - Adjusted sea level (inches)": 7.996062984,
    "CSIRO - Lower error bound (inches)": 7.712598417,
    "CSIRO - Upper error bound (inches)": 8.279527551,
    "NOAA - Adjusted sea level (inches)": 7.70214715
  },
  {
    "Year": 2008,
    "CSIRO - Adjusted sea level (inches)": 8.350393692,
    "CSIRO - Lower error bound (inches)": 8.078740149,
    "CSIRO - Upper error bound (inches)": 8.622047235,
    "NOAA - Adjusted sea level (inches)": 7.90736541
  },
  {
    "Year": 2009,
    "CSIRO - Adjusted sea level (inches)": 8.586614164,
    "CSIRO - Lower error bound (inches)": 8.311023614,
    "CSIRO - Upper error bound (inches)": 8.862204715,
    "NOAA - Adjusted sea level (inches)": 8.04635409
  },
  {
    "Year": 2010,
    "CSIRO - Adjusted sea level (inches)": 8.901574794,
    "CSIRO - Lower error bound (inches)": 8.618110227,
    "CSIRO - Upper error bound (inches)": 9.185039361,
    "NOAA - Adjusted sea level (inches)": 8.122972567
  },
  {
    "Year": 2011,
    "CSIRO - Adjusted sea level (inches)": 8.96456692,
    "CSIRO - Lower error bound (inches)": 8.661417314,
    "CSIRO - Upper error bound (inches)": 9.267716526,
    "NOAA - Adjusted sea level (inches)": 8.053065004
  },
  {
    "Year": 2012,
    "CSIRO - Adjusted sea level (inches)": 9.326771644,
    "CSIRO - Lower error bound (inches)": 8.992125975,
    "CSIRO - Upper error bound (inches)": 9.661417313,
    "NOAA - Adjusted sea level (inches)": 8.457057629
  },
  {
    "Year": 2013,
    "CSIRO - Adjusted sea level (inches)": 8.980314951,
    "CSIRO - Lower error bound (inches)": 8.622047235,
    "CSIRO - Upper error bound (inches)": 9.338582668,
    "NOAA - Adjusted sea level (inches)": 8.546648227
  },
  {
    "Year": 2014,
    "CSIRO - Adjusted sea level (inches)": "",
    "CSIRO - Lower error bound (inches)": "",
    "CSIRO - Upper error bound (inches)": "",
    "NOAA - Adjusted sea level (inches)": 8.663700393
  }
]},
    dataTwo:{
      title: "Global temperatures",
      source: "https://datahub.io/core/global-temp#resource-annual",
      values: [
      {
      "Mean": 0.9363,
      "Source": "GCAG",
      "Year": 2016
      },
      {
      "Mean": 0.99,
      "Source": "GISTEMP",
      "Year": 2016
      },
      {
      "Mean": 0.8998,
      "Source": "GCAG",
      "Year": 2015
      },
      {
      "Mean": 0.87,
      "Source": "GISTEMP",
      "Year": 2015
      },
      {
      "Mean": 0.7408,
      "Source": "GCAG",
      "Year": 2014
      },
      {
      "Mean": 0.74,
      "Source": "GISTEMP",
      "Year": 2014
      },
      {
      "Mean": 0.6679,
      "Source": "GCAG",
      "Year": 2013
      },
      {
      "Mean": 0.65,
      "Source": "GISTEMP",
      "Year": 2013
      },
      {
      "Mean": 0.624,
      "Source": "GCAG",
      "Year": 2012
      },
      {
      "Mean": 0.63,
      "Source": "GISTEMP",
      "Year": 2012
      },
      {
      "Mean": 0.5788,
      "Source": "GCAG",
      "Year": 2011
      },
      {
      "Mean": 0.6,
      "Source": "GISTEMP",
      "Year": 2011
      },
      {
      "Mean": 0.7014,
      "Source": "GCAG",
      "Year": 2010
      },
      {
      "Mean": 0.71,
      "Source": "GISTEMP",
      "Year": 2010
      },
      {
      "Mean": 0.6367,
      "Source": "GCAG",
      "Year": 2009
      },
      {
      "Mean": 0.64,
      "Source": "GISTEMP",
      "Year": 2009
      },
      {
      "Mean": 0.5419,
      "Source": "GCAG",
      "Year": 2008
      },
      {
      "Mean": 0.54,
      "Source": "GISTEMP",
      "Year": 2008
      },
      {
      "Mean": 0.61,
      "Source": "GCAG",
      "Year": 2007
      },
      {
      "Mean": 0.66,
      "Source": "GISTEMP",
      "Year": 2007
      },
      {
      "Mean": 0.6125,
      "Source": "GCAG",
      "Year": 2006
      },
      {
      "Mean": 0.63,
      "Source": "GISTEMP",
      "Year": 2006
      },
      {
      "Mean": 0.6585,
      "Source": "GCAG",
      "Year": 2005
      },
      {
      "Mean": 0.69,
      "Source": "GISTEMP",
      "Year": 2005
      },
      {
      "Mean": 0.5783,
      "Source": "GCAG",
      "Year": 2004
      },
      {
      "Mean": 0.55,
      "Source": "GISTEMP",
      "Year": 2004
      },
      {
      "Mean": 0.6134,
      "Source": "GCAG",
      "Year": 2003
      },
      {
      "Mean": 0.62,
      "Source": "GISTEMP",
      "Year": 2003
      },
      {
      "Mean": 0.6023,
      "Source": "GCAG",
      "Year": 2002
      },
      {
      "Mean": 0.63,
      "Source": "GISTEMP",
      "Year": 2002
      },
      {
      "Mean": 0.5473,
      "Source": "GCAG",
      "Year": 2001
      },
      {
      "Mean": 0.55,
      "Source": "GISTEMP",
      "Year": 2001
      },
      {
      "Mean": 0.4262,
      "Source": "GCAG",
      "Year": 2000
      },
      {
      "Mean": 0.42,
      "Source": "GISTEMP",
      "Year": 2000
      },
      {
      "Mean": 0.4438,
      "Source": "GCAG",
      "Year": 1999
      },
      {
      "Mean": 0.42,
      "Source": "GISTEMP",
      "Year": 1999
      },
      {
      "Mean": 0.6344,
      "Source": "GCAG",
      "Year": 1998
      },
      {
      "Mean": 0.64,
      "Source": "GISTEMP",
      "Year": 1998
      },
      {
      "Mean": 0.5187,
      "Source": "GCAG",
      "Year": 1997
      },
      {
      "Mean": 0.48,
      "Source": "GISTEMP",
      "Year": 1997
      },
      {
      "Mean": 0.3228,
      "Source": "GCAG",
      "Year": 1996
      },
      {
      "Mean": 0.35,
      "Source": "GISTEMP",
      "Year": 1996
      },
      {
      "Mean": 0.4577,
      "Source": "GCAG",
      "Year": 1995
      },
      {
      "Mean": 0.46,
      "Source": "GISTEMP",
      "Year": 1995
      },
      {
      "Mean": 0.3409,
      "Source": "GCAG",
      "Year": 1994
      },
      {
      "Mean": 0.32,
      "Source": "GISTEMP",
      "Year": 1994
      },
      {
      "Mean": 0.2853,
      "Source": "GCAG",
      "Year": 1993
      },
      {
      "Mean": 0.24,
      "Source": "GISTEMP",
      "Year": 1993
      },
      {
      "Mean": 0.2571,
      "Source": "GCAG",
      "Year": 1992
      },
      {
      "Mean": 0.23,
      "Source": "GISTEMP",
      "Year": 1992
      },
      {
      "Mean": 0.4055,
      "Source": "GCAG",
      "Year": 1991
      },
      {
      "Mean": 0.43,
      "Source": "GISTEMP",
      "Year": 1991
      },
      {
      "Mean": 0.4328,
      "Source": "GCAG",
      "Year": 1990
      },
      {
      "Mean": 0.44,
      "Source": "GISTEMP",
      "Year": 1990
      },
      {
      "Mean": 0.297,
      "Source": "GCAG",
      "Year": 1989
      },
      {
      "Mean": 0.29,
      "Source": "GISTEMP",
      "Year": 1989
      },
      {
      "Mean": 0.3757,
      "Source": "GCAG",
      "Year": 1988
      },
      {
      "Mean": 0.41,
      "Source": "GISTEMP",
      "Year": 1988
      },
      {
      "Mean": 0.3696,
      "Source": "GCAG",
      "Year": 1987
      },
      {
      "Mean": 0.33,
      "Source": "GISTEMP",
      "Year": 1987
      },
      {
      "Mean": 0.2296,
      "Source": "GCAG",
      "Year": 1986
      },
      {
      "Mean": 0.19,
      "Source": "GISTEMP",
      "Year": 1986
      },
      {
      "Mean": 0.1342,
      "Source": "GCAG",
      "Year": 1985
      },
      {
      "Mean": 0.12,
      "Source": "GISTEMP",
      "Year": 1985
      },
      {
      "Mean": 0.149,
      "Source": "GCAG",
      "Year": 1984
      },
      {
      "Mean": 0.15,
      "Source": "GISTEMP",
      "Year": 1984
      },
      {
      "Mean": 0.3411,
      "Source": "GCAG",
      "Year": 1983
      },
      {
      "Mean": 0.3,
      "Source": "GISTEMP",
      "Year": 1983
      },
      {
      "Mean": 0.1815,
      "Source": "GCAG",
      "Year": 1982
      },
      {
      "Mean": 0.13,
      "Source": "GISTEMP",
      "Year": 1982
      },
      {
      "Mean": 0.2999,
      "Source": "GCAG",
      "Year": 1981
      },
      {
      "Mean": 0.33,
      "Source": "GISTEMP",
      "Year": 1981
      },
      {
      "Mean": 0.2637,
      "Source": "GCAG",
      "Year": 1980
      },
      {
      "Mean": 0.27,
      "Source": "GISTEMP",
      "Year": 1980
      },
      {
      "Mean": 0.2273,
      "Source": "GCAG",
      "Year": 1979
      },
      {
      "Mean": 0.17,
      "Source": "GISTEMP",
      "Year": 1979
      },
      {
      "Mean": 0.1123,
      "Source": "GCAG",
      "Year": 1978
      },
      {
      "Mean": 0.07,
      "Source": "GISTEMP",
      "Year": 1978
      },
      {
      "Mean": 0.1978,
      "Source": "GCAG",
      "Year": 1977
      },
      {
      "Mean": 0.18,
      "Source": "GISTEMP",
      "Year": 1977
      },
      {
      "Mean": -0.0792,
      "Source": "GCAG",
      "Year": 1976
      },
      {
      "Mean": -0.11,
      "Source": "GISTEMP",
      "Year": 1976
      },
      {
      "Mean": 0.0034,
      "Source": "GCAG",
      "Year": 1975
      },
      {
      "Mean": -0.02,
      "Source": "GISTEMP",
      "Year": 1975
      },
      {
      "Mean": -0.0719,
      "Source": "GCAG",
      "Year": 1974
      },
      {
      "Mean": -0.07,
      "Source": "GISTEMP",
      "Year": 1974
      },
      {
      "Mean": 0.1641,
      "Source": "GCAG",
      "Year": 1973
      },
      {
      "Mean": 0.15,
      "Source": "GISTEMP",
      "Year": 1973
      },
      {
      "Mean": 0.0264,
      "Source": "GCAG",
      "Year": 1972
      },
      {
      "Mean": 0.01,
      "Source": "GISTEMP",
      "Year": 1972
      },
      {
      "Mean": -0.0783,
      "Source": "GCAG",
      "Year": 1971
      },
      {
      "Mean": -0.09,
      "Source": "GISTEMP",
      "Year": 1971
      },
      {
      "Mean": 0.0372,
      "Source": "GCAG",
      "Year": 1970
      },
      {
      "Mean": 0.02,
      "Source": "GISTEMP",
      "Year": 1970
      },
      {
      "Mean": 0.0929,
      "Source": "GCAG",
      "Year": 1969
      },
      {
      "Mean": 0.07,
      "Source": "GISTEMP",
      "Year": 1969
      },
      {
      "Mean": -0.0296,
      "Source": "GCAG",
      "Year": 1968
      },
      {
      "Mean": -0.07,
      "Source": "GISTEMP",
      "Year": 1968
      },
      {
      "Mean": -0.0131,
      "Source": "GCAG",
      "Year": 1967
      },
      {
      "Mean": -0.02,
      "Source": "GISTEMP",
      "Year": 1967
      },
      {
      "Mean": -0.0227,
      "Source": "GCAG",
      "Year": 1966
      },
      {
      "Mean": -0.05,
      "Source": "GISTEMP",
      "Year": 1966
      },
      {
      "Mean": -0.078,
      "Source": "GCAG",
      "Year": 1965
      },
      {
      "Mean": -0.1,
      "Source": "GISTEMP",
      "Year": 1965
      },
      {
      "Mean": -0.1495,
      "Source": "GCAG",
      "Year": 1964
      },
      {
      "Mean": -0.2,
      "Source": "GISTEMP",
      "Year": 1964
      },
      {
      "Mean": 0.1068,
      "Source": "GCAG",
      "Year": 1963
      },
      {
      "Mean": 0.06,
      "Source": "GISTEMP",
      "Year": 1963
      },
      {
      "Mean": 0.0888,
      "Source": "GCAG",
      "Year": 1962
      },
      {
      "Mean": 0.03,
      "Source": "GISTEMP",
      "Year": 1962
      },
      {
      "Mean": 0.0775,
      "Source": "GCAG",
      "Year": 1961
      },
      {
      "Mean": 0.05,
      "Source": "GISTEMP",
      "Year": 1961
      },
      {
      "Mean": 0.0204,
      "Source": "GCAG",
      "Year": 1960
      },
      {
      "Mean": -0.02,
      "Source": "GISTEMP",
      "Year": 1960
      },
      {
      "Mean": 0.0596,
      "Source": "GCAG",
      "Year": 1959
      },
      {
      "Mean": 0.03,
      "Source": "GISTEMP",
      "Year": 1959
      },
      {
      "Mean": 0.1095,
      "Source": "GCAG",
      "Year": 1958
      },
      {
      "Mean": 0.07,
      "Source": "GISTEMP",
      "Year": 1958
      },
      {
      "Mean": 0.0488,
      "Source": "GCAG",
      "Year": 1957
      },
      {
      "Mean": 0.04,
      "Source": "GISTEMP",
      "Year": 1957
      },
      {
      "Mean": -0.199,
      "Source": "GCAG",
      "Year": 1956
      },
      {
      "Mean": -0.2,
      "Source": "GISTEMP",
      "Year": 1956
      },
      {
      "Mean": -0.1354,
      "Source": "GCAG",
      "Year": 1955
      },
      {
      "Mean": -0.15,
      "Source": "GISTEMP",
      "Year": 1955
      },
      {
      "Mean": -0.1165,
      "Source": "GCAG",
      "Year": 1954
      },
      {
      "Mean": -0.13,
      "Source": "GISTEMP",
      "Year": 1954
      },
      {
      "Mean": 0.0952,
      "Source": "GCAG",
      "Year": 1953
      },
      {
      "Mean": 0.08,
      "Source": "GISTEMP",
      "Year": 1953
      },
      {
      "Mean": 0.0248,
      "Source": "GCAG",
      "Year": 1952
      },
      {
      "Mean": 0.01,
      "Source": "GISTEMP",
      "Year": 1952
      },
      {
      "Mean": -0.0132,
      "Source": "GCAG",
      "Year": 1951
      },
      {
      "Mean": -0.07,
      "Source": "GISTEMP",
      "Year": 1951
      },
      {
      "Mean": -0.1616,
      "Source": "GCAG",
      "Year": 1950
      },
      {
      "Mean": -0.18,
      "Source": "GISTEMP",
      "Year": 1950
      },
      {
      "Mean": -0.0568,
      "Source": "GCAG",
      "Year": 1949
      },
      {
      "Mean": -0.09,
      "Source": "GISTEMP",
      "Year": 1949
      },
      {
      "Mean": -0.0487,
      "Source": "GCAG",
      "Year": 1948
      },
      {
      "Mean": -0.09,
      "Source": "GISTEMP",
      "Year": 1948
      },
      {
      "Mean": -0.0477,
      "Source": "GCAG",
      "Year": 1947
      },
      {
      "Mean": -0.05,
      "Source": "GISTEMP",
      "Year": 1947
      },
      {
      "Mean": -0.004,
      "Source": "GCAG",
      "Year": 1946
      },
      {
      "Mean": -0.04,
      "Source": "GISTEMP",
      "Year": 1946
      },
      {
      "Mean": 0.171,
      "Source": "GCAG",
      "Year": 1945
      },
      {
      "Mean": 0.12,
      "Source": "GISTEMP",
      "Year": 1945
      },
      {
      "Mean": 0.2928,
      "Source": "GCAG",
      "Year": 1944
      },
      {
      "Mean": 0.25,
      "Source": "GISTEMP",
      "Year": 1944
      },
      {
      "Mean": 0.157,
      "Source": "GCAG",
      "Year": 1943
      },
      {
      "Mean": 0.13,
      "Source": "GISTEMP",
      "Year": 1943
      },
      {
      "Mean": 0.1538,
      "Source": "GCAG",
      "Year": 1942
      },
      {
      "Mean": 0.09,
      "Source": "GISTEMP",
      "Year": 1942
      },
      {
      "Mean": 0.196,
      "Source": "GCAG",
      "Year": 1941
      },
      {
      "Mean": 0.12,
      "Source": "GISTEMP",
      "Year": 1941
      },
      {
      "Mean": 0.0947,
      "Source": "GCAG",
      "Year": 1940
      },
      {
      "Mean": 0.08,
      "Source": "GISTEMP",
      "Year": 1940
      },
      {
      "Mean": -0.0139,
      "Source": "GCAG",
      "Year": 1939
      },
      {
      "Mean": -0.03,
      "Source": "GISTEMP",
      "Year": 1939
      },
      {
      "Mean": -0.0288,
      "Source": "GCAG",
      "Year": 1938
      },
      {
      "Mean": -0.03,
      "Source": "GISTEMP",
      "Year": 1938
      },
      {
      "Mean": -0.0157,
      "Source": "GCAG",
      "Year": 1937
      },
      {
      "Mean": -0.03,
      "Source": "GISTEMP",
      "Year": 1937
      },
      {
      "Mean": -0.1134,
      "Source": "GCAG",
      "Year": 1936
      },
      {
      "Mean": -0.15,
      "Source": "GISTEMP",
      "Year": 1936
      },
      {
      "Mean": -0.1392,
      "Source": "GCAG",
      "Year": 1935
      },
      {
      "Mean": -0.2,
      "Source": "GISTEMP",
      "Year": 1935
      },
      {
      "Mean": -0.1015,
      "Source": "GCAG",
      "Year": 1934
      },
      {
      "Mean": -0.14,
      "Source": "GISTEMP",
      "Year": 1934
      },
      {
      "Mean": -0.2439,
      "Source": "GCAG",
      "Year": 1933
      },
      {
      "Mean": -0.29,
      "Source": "GISTEMP",
      "Year": 1933
      },
      {
      "Mean": -0.1168,
      "Source": "GCAG",
      "Year": 1932
      },
      {
      "Mean": -0.17,
      "Source": "GISTEMP",
      "Year": 1932
      },
      {
      "Mean": -0.0686,
      "Source": "GCAG",
      "Year": 1931
      },
      {
      "Mean": -0.09,
      "Source": "GISTEMP",
      "Year": 1931
      },
      {
      "Mean": -0.1003,
      "Source": "GCAG",
      "Year": 1930
      },
      {
      "Mean": -0.15,
      "Source": "GISTEMP",
      "Year": 1930
      },
      {
      "Mean": -0.2985,
      "Source": "GCAG",
      "Year": 1929
      },
      {
      "Mean": -0.36,
      "Source": "GISTEMP",
      "Year": 1929
      },
      {
      "Mean": -0.1774,
      "Source": "GCAG",
      "Year": 1928
      },
      {
      "Mean": -0.21,
      "Source": "GISTEMP",
      "Year": 1928
      },
      {
      "Mean": -0.1546,
      "Source": "GCAG",
      "Year": 1927
      },
      {
      "Mean": -0.21,
      "Source": "GISTEMP",
      "Year": 1927
      },
      {
      "Mean": -0.0667,
      "Source": "GCAG",
      "Year": 1926
      },
      {
      "Mean": -0.1,
      "Source": "GISTEMP",
      "Year": 1926
      },
      {
      "Mean": -0.1481,
      "Source": "GCAG",
      "Year": 1925
      },
      {
      "Mean": -0.21,
      "Source": "GISTEMP",
      "Year": 1925
      },
      {
      "Mean": -0.2486,
      "Source": "GCAG",
      "Year": 1924
      },
      {
      "Mean": -0.28,
      "Source": "GISTEMP",
      "Year": 1924
      },
      {
      "Mean": -0.2156,
      "Source": "GCAG",
      "Year": 1923
      },
      {
      "Mean": -0.24,
      "Source": "GISTEMP",
      "Year": 1923
      },
      {
      "Mean": -0.2304,
      "Source": "GCAG",
      "Year": 1922
      },
      {
      "Mean": -0.28,
      "Source": "GISTEMP",
      "Year": 1922
      },
      {
      "Mean": -0.1485,
      "Source": "GCAG",
      "Year": 1921
      },
      {
      "Mean": -0.21,
      "Source": "GISTEMP",
      "Year": 1921
      },
      {
      "Mean": -0.2105,
      "Source": "GCAG",
      "Year": 1920
      },
      {
      "Mean": -0.27,
      "Source": "GISTEMP",
      "Year": 1920
      },
      {
      "Mean": -0.2055,
      "Source": "GCAG",
      "Year": 1919
      },
      {
      "Mean": -0.22,
      "Source": "GISTEMP",
      "Year": 1919
      },
      {
      "Mean": -0.2084,
      "Source": "GCAG",
      "Year": 1918
      },
      {
      "Mean": -0.26,
      "Source": "GISTEMP",
      "Year": 1918
      },
      {
      "Mean": -0.3146,
      "Source": "GCAG",
      "Year": 1917
      },
      {
      "Mean": -0.4,
      "Source": "GISTEMP",
      "Year": 1917
      },
      {
      "Mean": -0.293,
      "Source": "GCAG",
      "Year": 1916
      },
      {
      "Mean": -0.34,
      "Source": "GISTEMP",
      "Year": 1916
      },
      {
      "Mean": -0.0693,
      "Source": "GCAG",
      "Year": 1915
      },
      {
      "Mean": -0.11,
      "Source": "GISTEMP",
      "Year": 1915
      },
      {
      "Mean": -0.1395,
      "Source": "GCAG",
      "Year": 1914
      },
      {
      "Mean": -0.16,
      "Source": "GISTEMP",
      "Year": 1914
      },
      {
      "Mean": -0.3162,
      "Source": "GCAG",
      "Year": 1913
      },
      {
      "Mean": -0.34,
      "Source": "GISTEMP",
      "Year": 1913
      },
      {
      "Mean": -0.3288,
      "Source": "GCAG",
      "Year": 1912
      },
      {
      "Mean": -0.35,
      "Source": "GISTEMP",
      "Year": 1912
      },
      {
      "Mean": -0.4332,
      "Source": "GCAG",
      "Year": 1911
      },
      {
      "Mean": -0.44,
      "Source": "GISTEMP",
      "Year": 1911
      },
      {
      "Mean": -0.3789,
      "Source": "GCAG",
      "Year": 1910
      },
      {
      "Mean": -0.42,
      "Source": "GISTEMP",
      "Year": 1910
      },
      {
      "Mean": -0.4261,
      "Source": "GCAG",
      "Year": 1909
      },
      {
      "Mean": -0.47,
      "Source": "GISTEMP",
      "Year": 1909
      },
      {
      "Mean": -0.4396,
      "Source": "GCAG",
      "Year": 1908
      },
      {
      "Mean": -0.43,
      "Source": "GISTEMP",
      "Year": 1908
      },
      {
      "Mean": -0.3706,
      "Source": "GCAG",
      "Year": 1907
      },
      {
      "Mean": -0.4,
      "Source": "GISTEMP",
      "Year": 1907
      },
      {
      "Mean": -0.2174,
      "Source": "GCAG",
      "Year": 1906
      },
      {
      "Mean": -0.23,
      "Source": "GISTEMP",
      "Year": 1906
      },
      {
      "Mean": -0.2931,
      "Source": "GCAG",
      "Year": 1905
      },
      {
      "Mean": -0.28,
      "Source": "GISTEMP",
      "Year": 1905
      },
      {
      "Mean": -0.4194,
      "Source": "GCAG",
      "Year": 1904
      },
      {
      "Mean": -0.44,
      "Source": "GISTEMP",
      "Year": 1904
      },
      {
      "Mean": -0.3369,
      "Source": "GCAG",
      "Year": 1903
      },
      {
      "Mean": -0.35,
      "Source": "GISTEMP",
      "Year": 1903
      },
      {
      "Mean": -0.2463,
      "Source": "GCAG",
      "Year": 1902
      },
      {
      "Mean": -0.27,
      "Source": "GISTEMP",
      "Year": 1902
      },
      {
      "Mean": -0.1417,
      "Source": "GCAG",
      "Year": 1901
      },
      {
      "Mean": -0.15,
      "Source": "GISTEMP",
      "Year": 1901
      },
      {
      "Mean": -0.0679,
      "Source": "GCAG",
      "Year": 1900
      },
      {
      "Mean": -0.09,
      "Source": "GISTEMP",
      "Year": 1900
      },
      {
      "Mean": -0.1173,
      "Source": "GCAG",
      "Year": 1899
      },
      {
      "Mean": -0.16,
      "Source": "GISTEMP",
      "Year": 1899
      },
      {
      "Mean": -0.2546,
      "Source": "GCAG",
      "Year": 1898
      },
      {
      "Mean": -0.28,
      "Source": "GISTEMP",
      "Year": 1898
      },
      {
      "Mean": -0.1224,
      "Source": "GCAG",
      "Year": 1897
      },
      {
      "Mean": -0.11,
      "Source": "GISTEMP",
      "Year": 1897
      },
      {
      "Mean": -0.0974,
      "Source": "GCAG",
      "Year": 1896
      },
      {
      "Mean": -0.15,
      "Source": "GISTEMP",
      "Year": 1896
      },
      {
      "Mean": -0.229,
      "Source": "GCAG",
      "Year": 1895
      },
      {
      "Mean": -0.21,
      "Source": "GISTEMP",
      "Year": 1895
      },
      {
      "Mean": -0.2808,
      "Source": "GCAG",
      "Year": 1894
      },
      {
      "Mean": -0.31,
      "Source": "GISTEMP",
      "Year": 1894
      },
      {
      "Mean": -0.3212,
      "Source": "GCAG",
      "Year": 1893
      },
      {
      "Mean": -0.3,
      "Source": "GISTEMP",
      "Year": 1893
      },
      {
      "Mean": -0.3062,
      "Source": "GCAG",
      "Year": 1892
      },
      {
      "Mean": -0.27,
      "Source": "GISTEMP",
      "Year": 1892
      },
      {
      "Mean": -0.2532,
      "Source": "GCAG",
      "Year": 1891
      },
      {
      "Mean": -0.24,
      "Source": "GISTEMP",
      "Year": 1891
      },
      {
      "Mean": -0.322,
      "Source": "GCAG",
      "Year": 1890
      },
      {
      "Mean": -0.37,
      "Source": "GISTEMP",
      "Year": 1890
      },
      {
      "Mean": -0.0982,
      "Source": "GCAG",
      "Year": 1889
      },
      {
      "Mean": -0.12,
      "Source": "GISTEMP",
      "Year": 1889
      },
      {
      "Mean": -0.1471,
      "Source": "GCAG",
      "Year": 1888
      },
      {
      "Mean": -0.2,
      "Source": "GISTEMP",
      "Year": 1888
      },
      {
      "Mean": -0.2489,
      "Source": "GCAG",
      "Year": 1887
      },
      {
      "Mean": -0.33,
      "Source": "GISTEMP",
      "Year": 1887
      },
      {
      "Mean": -0.2003,
      "Source": "GCAG",
      "Year": 1886
      },
      {
      "Mean": -0.31,
      "Source": "GISTEMP",
      "Year": 1886
      },
      {
      "Mean": -0.2125,
      "Source": "GCAG",
      "Year": 1885
      },
      {
      "Mean": -0.32,
      "Source": "GISTEMP",
      "Year": 1885
      },
      {
      "Mean": -0.2009,
      "Source": "GCAG",
      "Year": 1884
      },
      {
      "Mean": -0.28,
      "Source": "GISTEMP",
      "Year": 1884
      },
      {
      "Mean": -0.1424,
      "Source": "GCAG",
      "Year": 1883
      },
      {
      "Mean": -0.21,
      "Source": "GISTEMP",
      "Year": 1883
      },
      {
      "Mean": -0.0648,
      "Source": "GCAG",
      "Year": 1882
      },
      {
      "Mean": -0.1,
      "Source": "GISTEMP",
      "Year": 1882
      },
      {
      "Mean": -0.0628,
      "Source": "GCAG",
      "Year": 1881
      },
      {
      "Mean": -0.12,
      "Source": "GISTEMP",
      "Year": 1881
      },
      {
      "Mean": -0.1148,
      "Source": "GCAG",
      "Year": 1880
      },
      {
      "Mean": -0.2,
      "Source": "GISTEMP",
      "Year": 1880
      }
]},
   counterOneSrc: "<iframe height='200' src='https://www.theworldcounts.com/counters/why_is_climate_change_important/melting_ice_caps_facts/embed?background_color=white&color=black&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=28&token=da6cee8234591f3a2542678e4c4510fb48b62b69' style='border: none' width='500'></iframe>",
   counterTwoSrc: "<iframe height='200' src='https://www.theworldcounts.com/counters/why_is_climate_change_important/Rising_sea_levels_facts/embed?background_color=white&color=black&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=28&token=da6cee8234591f3a2542678e4c4510fb48b62b69' style='border: none' width='500'></iframe>"
  },
  {
    title: "Trees",
    text: [
      {
        name: "one",
        body: "We lose trees at a rate of 50 soccer fields per minute as our food systems destroy our ecosystems. Most of this degradation occurs in the developing tropics of Africa, Latin America, and South and Southeast Asia where hundreds of millions of chronically-hungry, smallholder farming families use destructive and short-sighted agricultural practices that further degrade their communities trees, soil, water and biodiversity, making them even more likely to migrate and more vulnerable to the climate changes that lie ahead.We lose trees at a rate of 50 soccer fields per minute as our food systems destroy our ecosystems. Most of this degradation occurs in the developing tropics of Africa, Latin America, and South and Southeast Asia where hundreds of millions of chronically-hungry, smallholder farming families use destructive and short-sighted agricultural practices that further degrade their communities trees, soil, water and biodiversity, making them even more likely to migrate and more vulnerable to the climate changes that lie ahead"
      },
      {
        name: "two",
        body: "Deforestation is a particular concern in tropical rain forests because these forests are home to much of the world’s biodiversity. For example, in the Amazon around 17% of the forest has been lost in the last 50 years, mostly due to forest conversion for cattle ranching. Deforestation in this region is particularly rampant near more populated areas, roads and rivers, but even remote areas have been encroached upon when valuable mahogany, gold, and oil are discovered."
      },
      {
        name: "Here are some ways that you can do to stop or prevent deforestation.",
        body: "1. Plant a Tree where you can. 2. Go paperless at home and in the office. 3. Buy recycled products and then recycle them again. 4. Buy certified wood products. Read the labels and look for the FSC (Forest Stewardship Council) mark. 5. Support the products of companies that are committed to reducing deforestation. It’s all about business. If you don’t buy, they will be encouraged to improve their practices. 6. Don’t use Palm Oil or products with Palm Oil. "
      }
    ],
   data: {},
   dataTwo: {},
   counterOneSrc: "<iframe height='200' src='https://www.theworldcounts.com/counters/degradation_and_destruction_of_ecosystems/facts_on_deforestation/embed?background_color=white&color=black&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=28&token=da6cee8234591f3a2542678e4c4510fb48b62b69' style='border: none' width='500'></iframe>",
   counterTwoSrc: "<iframe height='200' src='https://www.theworldcounts.com/counters/degradation_and_destruction_of_ecosystems/forestation_and_deforestation/embed?background_color=white&color=black&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=28&token=da6cee8234591f3a2542678e4c4510fb48b62b69' style='border: none' width='500'></iframe>"
},
  {
    title: "Diet",
    text: [
      {
        name: "one",
        body: "first block of text here"
      },
      {
        name: "two",
        body: "second block of text here"
      },
      {
        name: "three",
        body: "third block of text here"
      }
    ],
   data: {},
   dataTwo: {},
   counterOneSrc: "<iframe height='200' src='https://www.theworldcounts.com/counters/world_food_consumption_statistics/environmental_effects_of_meat_production/embed?background_color=white&color=black&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=28&token=da6cee8234591f3a2542678e4c4510fb48b62b69' style='border: none' width='500'></iframe>",
   counterTwoSrc: "<iframe height='200' src='https://www.theworldcounts.com/counters/world_food_consumption_statistics/world_food_waste_statistics/embed?background_color=white&color=black&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=28&token=da6cee8234591f3a2542678e4c4510fb48b62b69' style='border: none' width='500'></iframe>"
 }
])
