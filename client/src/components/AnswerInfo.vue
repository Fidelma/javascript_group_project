<template lang="html">
  <div class="answerContainer">
    <h2>Correct!</h2>
    <h2>{{currentQuestion.answerBody.title}}</h2>
    <div class="image-details">
      <div class="">
        <div v-html="currentQuestion.answerBody.counter1URL"/>
        <p>{{currentQuestion.answerBody.text}}</p>
        <div v-for="fact in currentQuestion.answerBody.facts">{{fact.body}}</div>
      </div>
      <img v-bind:src="currentQuestion.answerBody.image" alt="">
    </ul>
  </div>
    <button type="answerInfoBtn" class="answer-info-btn" name="button" v-for="category in currentQuestion.categories">Read more about {{category}}</button>

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

.answer-info-btn {
  padding: 10px;
  margin: 10px;
  font-size: 1.2em;
  font-weight: bold;
  width: 150px;
}

.answerContainer {
  border-style: double;
  margin-top: 60px;
}

.image-details {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

</style>
