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
    categories: ["oceans"]
  },
  {
    title: "Trees",
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
    title: "population",
    question: "To make an average hamburger, it takes:",
    answerObject: [{
      type: "correct",
      body: "Equivalent of 14.5 baths"
    },
    {
      type: "incorrect",
      body: "The amount of energy to charge your phone for a year"
    },
    {
      type: "incorrect",
      body: "An area the size of the meadows every day"
    }
  ],
    categories: ["population"]
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
