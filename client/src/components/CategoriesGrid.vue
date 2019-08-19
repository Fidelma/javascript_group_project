<template lang="html">
  <ul>
    <li v-for="category in categories">{{category.body}}</li>
  </ul>
</template>

<script>
export default {
  name: 'categories-grid',
  props: ['categories']
}
</script>

<style lang="css" scoped>
</style>
