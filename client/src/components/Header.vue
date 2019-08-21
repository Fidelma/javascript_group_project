<template lang="html">
  <div class="header">
    <h1 class="header">We Are All Screwed!</h1>
    <img src="../../public/header_image.jpg" alt="">
  </div>
</template>

<script>
export default {
  name: 'app-header'
}
</script>

<style lang="css" scoped>
  img{
    min-width: 100%;
  }


  .header {
  padding: 6px;
  text-align: center;
  color: black;
  font-size: 75px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
