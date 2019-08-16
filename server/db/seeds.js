use climate_quiz;
db.dropDatabase();

db.questions.insertMany([
  {
    question: "How long will fidelma torture mike for?",
    answer: "She's not sure"
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
