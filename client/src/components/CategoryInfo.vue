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
</style>
