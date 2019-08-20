<template lang="html">
  <div class="answerContainer">
    <h2>Answer</h2>
    <h2>{{currentQuestion.answerBody.title}}</h2>
    <p>{{currentQuestion.answerBody.text}}</p>
    <!-- <iframe v-bind:src="questions[randomIndex].answerBody.counter1URL" width="300" height="100"></iframe> -->
    <div v-html="currentQuestion.answerBody.counter1URL"/>
    <ul class="image-details">
      <li v-for="fact in currentQuestion.answerBody.facts">{{fact.body}}</li>
      <img v-bind:src="currentQuestion.answerBody.image" alt="">
    </ul>

    <button type="button" name="button" v-for="category in currentQuestion.categories">Read more about {{category}}</button>

  </div>
</template>



<script>
export default {
  name: "answer-info",
  props: ["currentQuestion"]
}
</script>

<style lang="css" scoped>
img {
  width:500px;
  height:450px;
  padding: 15px;
}

iframe {
  color:black;
}

.answerContainer {
  border-style: double;
  margin-top: 60px;
}

.image-details {
  /* display: flex;
  /* flex-wrap: wrap; */
  /* justify-content: space-evenly; */
}

</style>
