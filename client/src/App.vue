<template>

  <div id="app">
    <header/>
    <navBar/>
    <router-view id="view"></router-view>
  </div>
</div>

</template>

<script>

import AppHeader from '@/components/Header.vue'
import navBar from '@/components/Nav.vue'

export default {
  name: 'app',
  components: {
    'app-header': AppHeader,
    'navBar': navBar
 }
}

</script>

<style>


#app {
  margin-top: 0px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
