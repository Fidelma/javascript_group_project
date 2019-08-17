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

  ]
    categories: ["oceans"]
  },
  {
    question: "How long will mike torture fidelma for?",
    answer: "he's not sure"
  }
])

db.categories.insertMany([
  {
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    body: "diff ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et ."
  }
])
