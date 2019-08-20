<template>

  <div id="app">
    <app-header/>
    <navBar/>
    <router-view class="main" id="view"></router-view>
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

* {
  padding: 0px;
  margin: 0px;
}

#app {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  margin-top: 0px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-right: 75px;
  margin-left: 75px;
}

.nav { grid-area: 1 / 1 / 6 / 2; }
.header { grid-area: 1 / 2 / 2 / 7; }
.main { grid-area: 2 / 2 / 5 / 7; }
.footer { grid-area: 5 / 2 / 6 / 7; }
</style>
