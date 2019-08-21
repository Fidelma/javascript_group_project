<template lang="html">
  <div class="">
    <categories-grid :categories="categories"/>
    <category-info v-if="selectedCategoryIndex >= 0 && currentCategory" :currentCategory="currentCategory"/>
    <charts v-if="selectedCategoryIndex!=null && currentCategory && chartData.length >= 1" :currentCategory="currentCategory" :chartData="chartData"/>
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
      selectedCategoryIndex: null,
      // currentCategory: {}
      chartData: [],
      // chartTwoData: {}
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
      this.chartData = []
      this.selectedCategoryIndex = index
      this.chartData = ChartsServices.getCharts(this.categories[this.selectedCategoryIndex])
      // this.chartTwoData = ChartsServices.prettyGlobalTemperature(this.categories[this.selectedCategoryIndex].dataTwo)
    })

  },
  computed: {
    currentCategory: function(){
      return this.categories[this.selectedCategoryIndex]
    },
    // chartData: function(){
    //   // return this.categories[this.selectedCategoryIndex].data
    //   return ChartsServices.prettySeaLevel(this.categories[this.selectedCategoryIndex].data)
    // },
    // chartTwoData: function(){
    //   return ChartsServices.prettyGlobalTemperature(this.categories[this.selectedCategoryIndex].dataTwo)
    // }

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
