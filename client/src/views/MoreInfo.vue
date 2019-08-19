<template lang="html">
  <div class="">
    <categories-grid :categories="categories"/>
    <category-info v-if="selectedCategory >= 0" :categories="categories" :selectedCategory="selectedCategory"/>
  </div>
</template>

<script>
import { eventBus } from '@/main.js'
import CategoriesService from '@/services/CategoriesService.js'
import CategoriesGrid from '@/components/CategoriesGrid.vue'
import CategoryInfo from '@/components/CategoryInfo.vue'

export default {
  name: 'more-info',

  data(){
    return{
      categories: [],
      selectedCategory: null
    }
  },
  components: {
    'categories-grid': CategoriesGrid,
    'category-info': CategoryInfo
  },

  mounted() {
    this.fetchCategories()

    eventBus.$on('category-selected', (id) => {
      this.selectedCategory = id
    })

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
