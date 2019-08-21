<template lang="html">
  <div class="">

  <form id="questions-form" class="" v-on:submit="handleSubmit">
    <h2>Add a new question</h2>

<div class="form-wrap">
  <label for="title">Question Title</label>
  <input type="text" id="title" v-model="title">
</div>

<div class="form-wrap">
  <label for="question">Question</label>
  <input type="text" id="question" v-model="question">
</div>
<br>
<h2>Answer Details</h2>



<div class="form-wrap">
  <label for="title">Answer Option 1</label>
  <input type="text" name="" v-model="answerObject[0].body">
</div>
  <div class="">
  <label for="">True/False</label>
  <select v-model="answerObject[0].correct">
    <option></option>
    <option>True</option>
    <option>False</option>
  </select>
</div>

<div class="form-wrap">
  <label for="title">Answer Option 2</label>
  <input type="text" name="" v-model="answerObject[1].body">
</div>
  <div class="">
  <label for="">True/False</label>
  <select v-model="answerObject[1].correct">
    <option></option>
    <option>True</option>
    <option>False</option>
  </select>
</div>

<div class="form-wrap">
  <label for="title">Answer Option 3</label>
  <input type="text" name="" v-model="answerObject[2].body">
</div>

  <div class="">
  <label for="">True/False</label>
  <select v-model="answerObject[2].correct">
    <option></option>
    <option>True</option>
    <option>False</option>
  </select>
</div>
<br>

<div class="form-wrap">
  <label for="title">Categories</label>
  <input type="text" name="" v-model="categories">
</div>
<br>

<h2>Answer Info Details</h2>
<div class="form-wrap">
  <label for="title">Correct Answer</label>
  <input type="text" name="" v-model="answerBody.title">
</div>

<div class="form-wrap">
  <label for="title">Fact 1</label>
  <input type="text" name="" v-model="answerBody.facts[0].body">
</div>

<div class="form-wrap">
  <label for="title">Fact 2</label>
  <input type="text" name="" v-model="answerBody.facts[1].body">
</div>

<div class="form-wrap">
  <label for="title">Fact 3</label>
  <input type="text" name="" v-model="answerBody.facts[2].body">
</div>

<div class="form-wrap">
  <label for="counter1URL">Counter URL</label>
  <input type="text" name="" v-model="answerBody.counter1URL">
</div>

<div class="form-wrap">
  <label for="imageURL">Image URL</label>
  <input type="text" name="" v-model="answerBody.image">
</div>

<div class="form-wrap">
  <label for="imageDetail">Image details</label>
  <input type="text" name="" v-model="answerBody.imageDetail">
</div>

<input type="submit" name="" value="Save">
  </form>
</div>

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
      event.preventDefault();
      console.log(this.answerObject);
    const payload = {
      title: this.title,
      question: this.question,
      answerObject: [{
        correct: this.answerObject[0].correct,
        body: this.answerObject[0].body
      },
      {
        correct: this.answerObject[1].correct,
        body: this.answerObject[1].body
      },
      {
        correct: this.answerObject[2].correct,
        body: this.answerObject[2].body
      }],
      categories: [this.categories],
      answerBody: {
        title: this.answerBody.title,
        facts: [{
          fact: "one",
          body: this.answerBody.facts[0].body
        },
        {
          fact: "two",
          body: this.answerBody.facts[1].body
        },
        {
          fact: "three",
          body: this.answerBody.facts[2].body
        }],
        counter1URL: this.answerBody.counter1URL,
        image: this.answerBody.image,
        imageDetail: this.answerBody.imageDetail
      }
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
