<template>
  <div id="app">
    <qanda-grid v-if="questions.length >= 1 && endOfQuestions" :questions="questions" :index="index" :randomList="randomList"/>

    <button v-if="endOfQuestions" type="button" name="button" @click="getRandomIndex">Next Question</button>  

    <p v-else>End of Questions</p>

    <answer-info v-if="questions.length >= 1 && correctAnswer" :questions="questions" :index="index"/>


  </div>
</template>

<script>
import CategoriesService from './services/CategoriesService.js'
import QuestionsService from './services/QuestionsService.js'
import QAndAGrid from './components/QAndAGrid.vue'
import AnswerInfo from './components/AnswerInfo.vue'
import { eventBus } from '@/main.js'


export default {
  name: 'app',

  data() {
    return {
      questions: [],
      categories: [],
      index: 0,
      endOfQuestions: true,
      correctAnswer: false
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
    // this.randomisedQuestions()
    eventBus.$on('correct-answer', (answer) => {
      this.correctAnswer = answer
    })

  },

  computed: {
    randomisedQuestions: function(){
      return this.questions.sort(function(){
        return 0.5 - Math.random()
      });
    },
    randomList: function(){
      return this.randomisedQuestions[this.index].answerObject.sort(function(){
        return 0.5 - Math.random()
      });
    }
  },

  //Trying to update question array so that question come in random order

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
      this.correctAnswer = false
      if (this.index < (this.questions.length - 1 )){
      this.index += 1
    } else {
      this.endOfQuestions = false
    }
      // = Math.floor(Math.random() * this.questions.length)
    },

    // randomisedQuestions() {
    //   return this.questions.sort(function(){
    //     return 0.5 - Math.random()
    //   });
    // },
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
