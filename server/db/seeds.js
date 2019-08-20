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
    text: "A staggering 217 billion tons (197 billion metric tons) of meltwater flowed off of Greenland's ice sheet into the Atlantic Ocean this July. The worst day of melting was July 31, when 11 billion tons (10 billion metric tons) of melted ice poured into the ocean.",
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
    body: "An area to hold 52 thousand ping pong tables"
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
  title: "The correct answer is an area to hold 52 thousand ping pong tables",
  facts: [{
    fact: "one",
    body: "Every minute forests the size of 20 football fields are cut down."
  },
  {
    fact: "two",
    body: "Every minute forests the size of 20 football fields are cut down."
  },
  {
    fact: "three",
    body: "Every minute forests the size of 20 football fields are cut down."
  }
  ],
  counter1URL:"<iframe height='100' src='https://www.theworldcounts.com/counters/why_is_climate_change_important/melting_ice_caps_facts/embed?background_color=white&color=black&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=14&token=da6cee8234591f3a2542678e4c4510fb48b62b69' style='border: none' width='300'></iframe>",
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
  counter1URL:"https://www.theworldcounts.com/counters/degradation_and_destruction_of_ecosystems/why_is_deforestation_a_problem/embed?",
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
   data: {},
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
   counters: ['counter1', 'counter2']
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
   counters: ['counter1', 'counter2']
 }
])
