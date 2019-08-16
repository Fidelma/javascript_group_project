<template lang="html">
  <div class="">

  <!-- <div class="" v-for="question in questions"> -->
  <ul>
    <li>{{questions[randomIndex].question}}</li>
    <li>{{questions[randomIndex].answer}}</li>
  </ul>

  </div>
<!-- </div> -->

</template>

<script>
export default {
  name: 'qanda-grid',
  props: ['questions', 'randomIndex']
}
</script>

<style lang="css" scoped>
</style>
