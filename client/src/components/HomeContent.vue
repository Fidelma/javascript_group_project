<template lang="html">
  <div class="">
    <h2>It's The End Of The World</h2>
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

h2 {
  padding: 15px;
  color: #008080;
}

.quiz-btn {
  margin: 10px;
  background-color: red;
  border-radius: 175px;
  height: 350px;
  width: 350px;
  font-size: 3em;
  font-weight: bold;
}

.quiz-btn:hover {background-color: #3e8e41}

.quiz-btn:active {
  background-color: #008080;
  box-shadow: 0 8px #666;
  transform: translateY(4px);
}
</style>
