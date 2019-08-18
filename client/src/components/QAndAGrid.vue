<template lang="html">
  <div class="question-grid">


  <h3>{{questions[index].question}}</h3>
  <div class="question">
      <button @click="checkAnswer(index, answer)"class="" v-for="answer in randomList">{{answer.body}}</button>
  </div>
  <!-- <p>{{questions[0].answerObject}}</p> -->

  </div>


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

</style>
