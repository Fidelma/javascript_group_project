<template lang="html">
  <div class="question-grid">


  <h3>{{questions[index].question}}</h3>
    <div class="question" >
        <button id="questions" class="" @click="checkAnswer(index, answer)" v-for="answer in randomList">{{answer.body}}</button>
    </div>
  </div>

<!-- v-bind:class="[checkAnswer ? 'correct-answer' : '', 'incorrect-answer']" -->

</template>

<script>
import { eventBus } from '@/main.js'

export default {
  name: 'qanda-grid',
  props: ['questions', 'index', 'randomList'],
  methods: {
    checkAnswer(id, answer){
      if(answer.type){
        eventBus.$emit('correct-answer', answer.type)
        const button = document.getElementById("question")
        element.classList.add("correct-answer")
      }else {
        const button = document.getElementById("question")
        element.classList.add("incorrect-answer")
      }

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

.correct-answer {
  background-color: green;
  font-weight: bold;
}

.incorrect-answer {
  background-color: red;

}

</style>
