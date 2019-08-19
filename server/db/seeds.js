use climate_quiz;
db.dropDatabase();

db.questions.insertMany([
  {
    title: "Greenlands Ice Sheet",
    question: "How much ice melted from the Greenland ice sheet in July 2019",
    answerObject: [{
      type: true,
      body: "217 billion tonnes"
    },
    {
      type: true,
      body: "Equivalent of almost 30 times Loch Ness"
    },
    {
      type: true,
      body: "86,800 olympic swimming pools"
    }
  ],
  categories: ["oceans"],
  answerBody: {
    title: "All of these are correct",
    text: "A staggering 217 billion tons (197 billion metric tons) of meltwater flowed off of Greenland's ice sheet into the Atlantic Ocean this July. The worst day of melting was July 31, when 11 billion tons (10 billion metric tons) of melted ice poured into the ocean.",
    counter1URL:"https://www.theworldcounts.com/counters/why_is_climate_change_important/melting_ice_caps_facts/embed?",
    image: "https://www.adn.com/resizer/E38reqe1JWUm5W_N6RNWZWoyiHE=/992x0/s3.amazonaws.com/arc-wordpress-client-uploads/adn/wp-content/uploads/2017/08/03093908/exit_glacier_online.jpg",
    imageDetail: "Exit gacier in Seward, Alaska is a visusal indicator of the effect that climate change is having on glaciers, the entry road to the glacier is marked with signposts detailing the year that the glacier stood at that marker."

  }
},
{
  title: "Trees",
  question: "What area of forest do humans destroy every hour?",
  answerObject: [{
    type: true,
    body: "An area to hold 52 thousand ping pong tables"
  },
  {
    type: false,
    body: "Murrayfield stadium every 20 minutes"
  },
  {
    type: false,
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
  counter1URL:"https://www.theworldcounts.com/counters/degradation_and_destruction_of_ecosystems/why_is_deforestation_a_problem/embed?",
  image: "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F9f1416db39e1da11af9f0014c2589dfb%2F960x0.jpg%3Ffit%3Dscale"
}
},
{
  title: "diet",
  question: "To make ONE average hamburger (200g):",
  answerObject: [{
    type: false,
    body: "It takes the equivalent of 6 baths of water"
  },
  {
    type: false,
    body: "It takes the same amount of energy to charge your phone for a year"
  },
  {
    type: true,
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
  },
  {
    title: "Trees",
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
