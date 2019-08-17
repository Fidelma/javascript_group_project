<template lang="html">
  <div class="answerContainer">
    <h2>Answer</h2>
    <h2>{{questions[randomIndex].answerBody.title}}</h2>
    <p>{{questions[randomIndex].answerBody.text}}</p>
    <!-- <iframe v-bind:src="questions[randomIndex].answerBody.counter1URL" width="300" height="100"></iframe> -->
    <div class="image-details">
      <p>{{questions[randomIndex].answerBody.imageDetail}}</p>
      <img v-bind:src="questions[randomIndex].answerBody.image" alt="">
    </div>

  </div>
</template>



<script>
export default {
  name: "answer-info",
  props: ["questions", "randomIndex"]
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
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: space-evenly;
}

</style>
