<template lang="html">
  <div class="">
    <categories-grid :categories="categories"/>
    <category-info v-if="selectedCategoryIndex >= 0 && currentCategory" :currentCategory="currentCategory"/>
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
      selectedCategoryIndex: null,
      // currentCategory: {}
    }
  },
  components: {
    'categories-grid': CategoriesGrid,
    'category-info': CategoryInfo
  },

  mounted() {
    this.fetchCategories()

    eventBus.$on('category-selected', (index) => {
      this.selectedCategoryIndex = index
    })

  },
  computed: {
    currentCategory: function(){
      return this.categories[this.selectedCategoryIndex]
    }

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
