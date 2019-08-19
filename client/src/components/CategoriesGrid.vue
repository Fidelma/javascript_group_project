<template lang="html">
  <div class="">

  <ul v-for="category in categories">
    <li>{{category.title}}</li>
    <li v-for="item in category.text">{{item.body}}</li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'categories-grid',
  props: ['categories']
}
</script>

<style lang="css" scoped>
</style>
