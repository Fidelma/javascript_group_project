<template>
  <div id="app">

    <!-- sidebar -->
    <div class="w3-sidebar w3-bar-block w3-card w3-animate-left" style="display:none" id="mySidebar">
      <button class="w3-bar-item w3-button w3-large"
      @click="w3_close()">Close &times;</button>
      <router-link :to="{ name: 'home'}">Home</router-link>
      <br>
      <router-link :to="{ name: 'moreinfo'}">MoreInfo</router-link>
    </div>
    <div class="w3-main" style="margin-left:200px">
  </div>

    <div id="main">
      <div class="w3-teal">
        <button id="openNav" class="w3-button w3-teal w3-xlarge" @click="w3_open()">&#9776;           CLIMATE QUIZ </button>
        <div class="w3-container">
        </div>
      </div>
      <!-- sidebar above  -->

      <router-view id="view"></router-view>


    </div>
  </div>

</template>

<script>
import { eventBus } from '@/main.js'


export default {
  name: 'app',

  methods: {
    w3_open() {
      document.getElementById("main").style.marginLeft = "25%";
      document.getElementById("mySidebar").style.width = "25%";
      document.getElementById("mySidebar").style.display = "block";
      document.getElementById("openNav").style.display = 'none';
    },
    w3_close() {
      document.getElementById("main").style.marginLeft = "0%";
      document.getElementById("mySidebar").style.display = "none";
      document.getElementById("openNav").style.display = "inline-block";
    }
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
