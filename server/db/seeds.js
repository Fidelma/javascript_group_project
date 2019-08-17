use climate_quiz;
db.dropDatabase();

db.questions.insertMany([
  {
    title: "Greenlands Ice Sheet",
    question: "How much ice melted from the Greenland ice sheet in July 2019",
    answerObject: [{
      type: "correct",
      body: "217 billion tonnes"
    },
    {
      type: "correct",
      body: "Equivalet of almost 30 times Loch Ness"
    },
    {
      type: "correct",
      body: "86,800 olympic swimming pools"
    }
  ],
    categories: ["oceans"],
    answerBody: {
      title: "All of these are correct",
      text: "A staggering 217 billion tons (197 billion metric tons) of meltwater flowed off of Greenland's ice sheet into the Atlantic Ocean this July. The worst day of melting was July 31, when 11 billion tons (10 billion metric tons) of melted ice poured into the ocean.",
      counter1URL:"https://www.theworldcounts.com/counters/why_is_climate_change_important/melting_ice_caps_facts/embed?",
      image: "https://www.adn.com/resizer/E38reqe1JWUm5W_N6RNWZWoyiHE=/992x0/s3.amazonaws.com/arc-wordpress-client-uploads/adn/wp-content/uploads/2017/08/03093908/exit_glacier_online.jpg"

    }
  },
  {
    title: "trees",
    question: "What area of forest do humans destroy every hour?",
    answerObject: [{
      type: "correct",
      body: "An area to hold 52 thousand ping pong tables"
    },
    {
      type: "incorrect",
      body: "Murrayfield stadium every 20 minutes"
    },
    {
      type: "incorrect",
      body: "An area the size of the meadows every day"
    }
  ],
    categories: ["trees"]
  },
  {
    title: "diet",
    question: "To make ONE average hamburger, it takes:",
    answerObject: [{
      type: "incorrect",
      body: "Equivalent of 6 baths"
    },
    {
      type: "incorrect",
      body: "The amount of energy to charge your phone for a year"
    },
    {
      type: "correct",
      body: "The space required for 1.4 ping pong tables"
    }
  ],
    categories: ["diet", "water"]
  },
])

db.categories.insertMany([
  {
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    body: "diff ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et ."
  }
])
