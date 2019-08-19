<template lang="html">
  <div class="">

    <button type="button" name="button" @click="selectCategory(index)" v-for="(category, index) in categories">{{category.title}}</button>

  <!-- <ul v-for="category in categories">
    <li>{{category.title}}</li>
  </ul> -->
</div>
</template>

<script>
import { eventBus } from '@/main.js'

export default {
  name: 'categories-grid',
  props: ['categories'],
  methods: {
    selectCategory(index){
      eventBus.$emit('category-selected', index)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
