<template lang="html">
  <form id="questions-form" class="" v-on:submit="handleSubmit">
    <h2>Add a new question</h2>

<div class="form-wrap">
  <label for="title">Question Title</label>
  <input type="text" name="" value="">
</div>

<div class="form-wrap">
  <label for="question">Question</label>
  <input type="text" name="" value="">
</div>
<br>
<h2>Answer Details</h2>

<div class="form-wrap">
  <label for="title">Answer Option 1</label>
  <input type="text" name="" value="">
</div>
  <div class="">
  <label for="">True/False</label>
  <select class="" name="">
    <option value=""></option>
    <option value="">True</option>
    <option value="">False</option>
  </select>
</div>

<div class="form-wrap">
  <label for="title">Answer Option 2</label>
  <input type="text" name="" value="">
</div>
  <div class="">
  <label for="">True/False</label>
  <select class="" name="">
    <option value=""></option>
    <option value="">True</option>
    <option value="">False</option>
  </select>
</div>

<div class="form-wrap">
  <label for="title">Answer Option 3</label>
  <input type="text" name="" value="">
</div>
  <div class="">
  <label for="">True/False</label>
  <select class="" name="">
    <option value=""></option>
    <option value="">True</option>
    <option value="">False</option>
  </select>
</div>
<br>
<div class="form-wrap">
  <label for="title">Categories</label>
  <input type="text" name="" value="">
</div>
<br>
<h2>Answer Info Details</h2>
<div class="form-wrap">
  <label for="title">Correct Answer</label>
  <input type="text" name="" value="">
</div>
<div class="form-wrap">
  <label for="title">Question Title</label>
  <input type="text" name="" value="">
</div>

<input type="submit" name="" value="Save">
  </form>
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
  },
  methods:{
    handleSubmit(event){
      event.prevetDefault();


    const payload = {

    };

    QuestionsService.postQuestion(payload)
    .then(question => {
      eventBus.$emit('question-added', question);
    });
  }
  }
}
</script>

<style lang="css" scoped>

form {
	width: 75%;
	margin: 0 auto;
	background: rgba(255, 255, 255, 0.7);
	padding: 20px;
	margin-bottom: 40px;
}

label {
	min-width: 100px;
	display: inline-block;
}

.formWrap {
	margin-bottom: 10px;
}

</style>
