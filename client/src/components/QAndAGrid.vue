<template lang="html">
  <div class="main question-grid">


    <h2>{{questions[index].question}}</h2>
    <div class="question">
      <button @click="checkAnswer(index, answer)" v-for="(answer, index) in randomList"  v-bind:class="{correct: !selectedAnswer.correct, incorrect:(answer === selectedAnswer)}" >{{answer.body}}</button>
    </div>
    <!-- <p>{{questions[0].answerObject}}</p> -->

  </div>

  <!-- v-bind:class="[checkAnswer ? 'correct-answer' : '', 'incorrect-answer']" -->

</template>

<script>
import { eventBus } from '@/main.js'

export default {
  name: 'qanda-grid',
  props: ['questions', 'index', 'randomList', 'selectedAnswer'],
  methods: {
    checkAnswer(inex, answer){
      // if(answer.correct){
      //   eventBus.$emit('correct-answer', answer.correct)
      // }

      eventBus.$emit('selected-answer', {body: answer.body, correct: answer.correct});

    }
  }

}
</script>

<style lang="css" scoped>

.question {
  display: flex;
  justify-content: space-evenly;
  padding: 15px 0px 15px 0px;
  min-height: 150px;
  min-width: 150px;
}

.question-grid {
  border: 4px solid green;
  border-radius: 5px;
  margin: 30px 0px 30px 0px;
  padding: 15px 0px 15px 0px;
  background-image: url();

}





button {

  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  margin: 20px 20px;
  cursor: pointer;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
}

button:hover {

  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
}

.correct {
  background-color:;
  font-weight: bold;
}

.incorrect {
  background-color: red;

}

</style>
