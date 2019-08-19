<template lang="html">
  <div class="">
    <categories-grid :categories="categories"/>
    <category-info :categories="categories"/>
  </div>
</template>

<script>
import CategoriesService from '@/services/CategoriesService.js'
import CategoriesGrid from '@/components/CategoriesGrid.vue'
import CategoryInfo from '@/components/CategoryInfo.vue'

export default {
  name: 'more-info',

  data(){
    return{
      categories: []
    }
  },
  components: {
    'categories-grid': CategoriesGrid,
    'category-info': CategoryInfo
  },

  mounted() {
    this.fetchCategories()
  },

  methods: {
    fetchCategories(){
      CategoriesService.getCategories()
        .then(categories => this.categories = categories);
    }
  }

}
</script>

<style lang="css" scoped>
</style>
