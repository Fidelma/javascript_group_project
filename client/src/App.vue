<template>
  <div id="app">

  </div>
</template>

<script>
import CategoriesService from './services/CategoriesService.js'
import QuestionsService from './services/QuestionsService.js'

export default {
  name: 'app',

  data() {
    return {
      questions: [],
      categories: []
    }
  },
  components: {

  },

  mounted() {
    this.fetchQuestions()
    this.fetchCategories()

  },

  methods: {
    fetchQuestions(){
      QuestionsService.getQuestions()
        .then(questions => this.questions = questions);
    },

    fetchCategories(){
      CategoriesService.getCategories()
        .then(categories => this.categories = categories);
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
