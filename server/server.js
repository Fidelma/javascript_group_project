const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

app.use(cors());
app.use(bodyParser.json());

MongoClient.connect('mongodb://localhost:27017')
  .then((client) => {
    const db = client.db('climate_quiz');
    const questionsCollection = db.collection('questions');
    const categoriesCollection = db.collection('categories');
    const questionsRouter = createRouter(questionsCollection);
    const categoriesRouter = createRouter(categoriesCollection);
    app.use('/api/questions', questionsRouter);
    app.use('/api/categories', categoriesRouter);
  })
  .catch(console.err);

  app.listen(3000, function(){
    console.log(`Listening on port ${ this.address().port }`);
  });
