<template lang="html">
  <div class="">


  <h3>{{questions[randomIndex].question}}</h3>
  <ul v-for="answer in questions[randomIndex].answerObject">
    <li>{{answer.body}}</li>
  </ul>
  <!-- <p>{{questions[0].answerObject}}</p> -->

  </div>


</template>

<script>
export default {
  name: 'qanda-grid',
  props: ['questions', 'randomIndex']
}
</script>

<style lang="css" scoped>
</style>
