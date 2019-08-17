<template lang="html">
  <div class="">


  <h3>{{questions[index].question}}</h3>
  <ul v-for="answer in this.randomList">
    <li>{{answer.body}}</li>
  </ul>
  <!-- <p>{{questions[0].answerObject}}</p> -->

  </div>


</template>

<script>
export default {
  name: 'qanda-grid',
  props: ['questions', 'index', 'randomList']

}
</script>

<style lang="css" scoped>
</style>
