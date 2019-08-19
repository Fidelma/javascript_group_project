<template lang="html">
  <div>

    <div class="w3-sidebar w3-bar-block w3-card w3-animate-left" style="display:none" id="mySidebar">

      <button class="w3-bar-item w3-button w3-large"
      @click="w3_close()">Close &times;</button>
      <router-link :to="{ name: 'home'}">Home</router-link>
      <br>
      <router-link :to="{ name: 'moreinfo'}">MoreInfo</router-link>

    </div>

    <div class="w3-main" style="margin-left:200px">

      <div id="main">

        <div class="w3-teal">
          <button id="openNav" class="w3-button w3-teal w3-xlarge" @click="w3_open()">&#9776;           CLIMATE QUIZ </button>
          <div class="w3-container">

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navBar',

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

<style lang="css" scoped>
</style>
