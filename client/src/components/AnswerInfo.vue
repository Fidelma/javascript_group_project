<template lang="html">
  <div class="">

    <p>{{questions[randomIndex].answerBody.title}}</p>
    <p>{{questions[randomIndex].answerBody.text}}</p>
    <iframe v-bind:src="questions[randomIndex].answerBody.counter1URL" width="300" height="100"></iframe>
    <img v-bind:src="questions[randomIndex].answerBody.image" alt="">

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
  width:300px;
  height:250px;
}

iframe {
  color:black;
}
</style>
