<template lang="html">
  <div class="">
    <categories-grid :categories="categories"/>
    <category-info v-if="selectedCategoryIndex >= 0 && currentCategory" :currentCategory="currentCategory"/>
    <charts v-if="selectedCategoryIndex >= 0 && currentCategory" :currentCategory="currentCategory" :chartData="chartData"/>
  </div>
</template>

<script>
import { eventBus } from '@/main.js'
import CategoriesService from '@/services/CategoriesService.js'
import CategoriesGrid from '@/components/CategoriesGrid.vue'
import CategoryInfo from '@/components/CategoryInfo.vue'
import Charts from '@/components/Charts.vue'
import ChartsServices from '@/services/ChartsServices.js'

export default {
  name: 'more-info',

  data(){
    return{
      categories: [],
      selectedCategoryIndex: null
      // currentCategory: {}
    }
  },
  components: {
    'categories-grid': CategoriesGrid,
    'category-info': CategoryInfo,
    'charts': Charts
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
    },
    chartData: function(){
      // return this.categories[this.selectedCategoryIndex].data
      return ChartsServices.prettyData(this.categories[this.selectedCategoryIndex].data)
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
