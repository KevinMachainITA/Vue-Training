<script setup>
  import {ref, computed} from "vue";

  const name = "Vue 3";

  let counter = ref(0);

  const increase = () => {
    counter.value++;
  }

  const decrease = () => {
    counter.value--;
  }

  const reset = () => {
    counter.value = 0;
  }

  const classCounter = computed(() => {
    if(counter.value === 0){
      return 'zero'
    } else if (counter.value > 0){
      return 'positive'
    } else{
      return 'negative'
    } 
  });
  
</script>

<template>
  <main class="container">
    <h1>!HI {{ name.toUpperCase() }}!</h1>
    <h2 :class="classCounter">{{counter}}</h2>
    <div class="main-buttons">
      <button @click="increase()" class="button">Increase</button>
      <button @click="reset()" class="button">Reset</button>
      <button @click="decrease()" class="button">Decrease</button>
    </div>
  </main>
</template>

<style>

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
  }

  h1{

    color: #fff;
    font-size: 4rem;
    text-align: center;
  }

  h2{
    text-align: center;
    font-size: 2.5rem;
  }

  .main-buttons{
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: .5rem;
    margin-top: 1rem;
  }

  .button {
    background-color: #04AA6D; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
  }

  .button:hover{
    cursor: pointer;
  }

  .positive {
    color: #04AA6D;
  }

  .negative {
    color: #f44336;
  }

  .zero {
    color: #3f3f3f
  }
</style>