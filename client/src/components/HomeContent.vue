<template lang="html">
  <div class="">
    <h1>It's The End Of The World</h1>
    <router-link :to="{ name: 'quiz' }">
      <button class="quiz-btn" type="button" name="button">Do Not Click Me</button>
    </router-link>
  </div>
</template>

<script>

import router from '@/router.js';

export default {
  name: "home-content"
}
</script>

<style lang="css" scoped>

h1 {
  padding: 30px;
}

.quiz-btn {
  margin: 25px;
  background-color: red;
  border-radius: 175px;
  height: 350px;
  width: 350px;
  font-size: 3em;
  font-weight: bold;
}
</style>
