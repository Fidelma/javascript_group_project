<template lang="html">
  <div class="categoryContainer">

  <div class="counters">

    <div v-html="currentCategory.counterOneSrc"></div>
    <div v-html="currentCategory.counterTwoSrc"></div>

  </div>

    <ul>
      <li v-for="category in currentCategory.text">{{category.body}}</li>
    </ul>
  </div>

</template>

<script>
import { eventBus } from '@/main.js'

export default {
  name: 'category-info',
  props: ['currentCategory']

}
</script>

<style lang="css" scoped>
.counters {
  display: flex;
  justify-content: space-evenly;
}

ul  {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

li {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  list-style-type: none;
  padding:10px;
  width:350px;
  font-weight: bold;
}
</style>
