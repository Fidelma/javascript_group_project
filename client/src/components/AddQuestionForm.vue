<template lang="html">

</template>

<script>

import { eventBus } from '@/main';
import QuestionsService from '@/services/QuestionsService';


export default {
  name: "questions-form",
  data(){
    return {
      title: "",
      question: "",
      answerObject: [{
        correct: null,
        body: ""
      },
      {
        correct: null,
        body: ""
      },
      {
        correct: null,
        body: ""
      }],
      categories: [],
      answerBody: {
        title: "",
        facts: [{
          fact: "one",
          body: ""
        },
        {
          fact: "two",
          body: ""
        },
        {
          fact: "three",
          body: ""
        }],
        counter1URL: "",
        image: "",
        imageDetail: ""
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
