<template lang="html">
  <div class="nav">
      <router-link :to="{ name: 'home'}">Home</router-link>
      <br>
      <router-link :to="{ name: 'moreinfo'}">MoreInfo</router-link>

  </div>

  </template>

  <script>
  export default {
    name: 'navBar'
  }

  </script>

  <style lang="css" scoped>
  margin-top: 0px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  </style>
