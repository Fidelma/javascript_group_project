<template lang="html">
  <div class="main question-grid">


  <h3>{{questions[index].question}}</h3>
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
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 15px 0px 15px 0px;

}

.question-grid {
  border-style: double;
  margin: 30px 0px 30px 0px;
  padding: 15px 0px 15px 0px;


}

button {
  padding: 10px;
  font-size: 1em;
}

button:hover {

  font-weight: bolder;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)
}

.correct {
  background-color:;
  font-weight: bold;
}

.incorrect {
  background-color: red;

}

</style>
