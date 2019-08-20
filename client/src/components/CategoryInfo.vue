<template lang="html">
  <div class="categoryContainer">
    <div class="" v-for="counter in currentCategory.counters">
      <div v-html="counter.src"/>
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
</style>
