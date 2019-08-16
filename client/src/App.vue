<template>
  <div id="app">
    <qanda-grid :questions="questions" :randomIndex="randomIndex"/>

    <button type="button" name="button" @click="getRandomIndex">Get random question</button>


  </div>
</template>

<script>
import CategoriesService from './services/CategoriesService.js'
import QuestionsService from './services/QuestionsService.js'
import QAndAGrid from './components/QAndAGrid.vue'

export default {
  name: 'app',

  data() {
    return {
      questions: [],
      categories: [],
      alreadyAnswered: [],
      randomIndex: 0
    }
  },
  components: {
    'qanda-grid': QAndAGrid

  },

  mounted() {
    this.fetchQuestions()
    this.fetchCategories()
    // this.getRandomIndex()

  },

  methods: {
    fetchQuestions(){
      QuestionsService.getQuestions()
        .then(questions => this.questions = questions);
    },

    fetchCategories(){
      CategoriesService.getCategories()
        .then(categories => this.categories = categories);
    },

    getRandomIndex(){
      this.randomIndex = Math.floor(Math.random() * this.questions.length)
    }
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
