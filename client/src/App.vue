<template>
  <div id="app">
    <qanda-grid v-if="questions.length >= 1" :questions="questions" :randomIndex="randomIndex" :randomList="randomList"/>

    <button type="button" name="button" @click="getRandomIndex">Get random question</button>
    <answer-info :questions="questions" :randomIndex="randomIndex"/>


  </div>
</template>

<script>
import CategoriesService from './services/CategoriesService.js'
import QuestionsService from './services/QuestionsService.js'
import QAndAGrid from './components/QAndAGrid.vue'
import AnswerInfo from './components/AnswerInfo.vue'

export default {
  name: 'app',

  data() {
    return {
      questions: [],
      categories: [],
      alreadyAnswered: [0,],
      randomIndex: 0
    }
  },
  components: {
    'qanda-grid': QAndAGrid,
    'answer-info': AnswerInfo

  },

  mounted() {
    this.fetchQuestions()
    this.fetchCategories()
    // this.getRandomIndex()

  },

  computed: {
    randomList: function(){
      return this.questions[this.randomIndex].answerObject.sort(function(){
        return 0.5 - Math.random()
      });
    }
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
