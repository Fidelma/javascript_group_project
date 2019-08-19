<template>
  <div id="app">
    <nav>
    <router-link :to="{ name: 'home'}">Home</router-link>
  </nav>
<router-view id="view"></router-view>

  </div>
</template>

<script>
import { eventBus } from '@/main.js'


export default {
  name: 'app',

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
