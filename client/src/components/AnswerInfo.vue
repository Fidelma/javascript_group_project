<template lang="html">
  <div class="answerContainer">
    <h2>Answer</h2>
    <h2>{{questions[index].answerBody.title}}</h2>
    <p>{{questions[index].answerBody.text}}</p>
    <!-- <iframe v-bind:src="questions[randomIndex].answerBody.counter1URL" width="300" height="100"></iframe> -->
    <div class="image-details">
      <p>{{questions[index].answerBody.imageDetail}}</p>
      <img v-bind:src="questions[index].answerBody.image" alt="">
    </div>

  </div>
</template>



<script>
export default {
  name: "answer-info",
  props: ["questions", "index"]
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
