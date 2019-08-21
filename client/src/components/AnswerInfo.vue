<template lang="html">
  <div class="answerContainer">
    <h2 class="correct">Correct!</h2>
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



  <router-link :to="{name: 'moreinfo'}">
    <button type="answerInfoBtn" class="answer-info-btn" name="button" v-for="category in currentQuestion.categories"> Read more about {{category}}</button>
  </router-link>

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
  width: 150px;
  color: white;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  background-color: #008080;
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

.correct{
  padding: 10px;
  margin: 10px;
  font-size: 5.2em;
  align-self: center;
  width: 50px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #008080;
}


</style>
