<template>
  <div id="">
    <qanda-grid v-if="questions.length >= 1 && endOfQuestions && !correctAnswer" :questions="questions" :index="index" :randomList="randomList" :selectedAnswer="selectedAnswer"/>



    <answer-info v-if="questions.length >= 1 && correctAnswer" :currentQuestion="currentQuestion"/>

    <button class="nextbutton" v-if="endOfQuestions" type="button" name="button" @click="incrementIndex">Next Question</button>


    <h1 v-else>End of Questions</h1>



  </div>
</template>

<script>
import QuestionsService from '@/services/QuestionsService.js'
import QAndAGrid from '@/components/QAndAGrid.vue'
import AnswerInfo from '@/components/AnswerInfo.vue'
import { eventBus } from '@/main.js'


export default {
  name: 'quiz',

  data() {
    return {
      questions: [],
      index: 0,
      // currentQuestion: {},
      endOfQuestions: true,
      correctAnswer: false,
      selectedAnswer: {}
    }
  },
  components: {
    'qanda-grid': QAndAGrid,
    'answer-info': AnswerInfo

  },

  mounted() {
    this.fetchQuestions()
    // this.getRandomIndex()
    // this.randomisedQuestions()
    eventBus.$on('selected-answer', (answer) => {
      this.correctAnswer = answer.correct
      const index = this.questions[this.index].answerObject.findIndex(option => option.body === answer.body)
      console.log(answer.body)
      this.selectedAnswer = this.questions[this.index].answerObject[index]

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
    },
    currentQuestion: function(){
      return this.questions[this.index];
    }
  },



  methods: {
    fetchQuestions(){
      QuestionsService.getQuestions()
        .then(questions => this.questions = questions);
    },

    incrementIndex(){
      this.correctAnswer = false
      this.selectedAnswer = {}
      if (this.index < (this.questions.length - 1 )){
      this.index += 1
    } else {
      this.endOfQuestions = false
    }
    },

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

.nextbutton{

  background-color: #008080;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  margin: 4px 2px;
  cursor: pointer;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
}

h1{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #008080;
}
</style>
