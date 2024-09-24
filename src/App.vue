<script setup>
  import {ref, computed} from "vue";
  import Number from "../src/components/Number.vue";

  const name = "Vue 3";

  const counter = ref(0);

  const numberList = ref([]);

  const favorite = ref(0);

  const increase = () => {
    counter.value++;
  }

  const decrease = () => {
    counter.value--;
  }

  const reset = () => {
    counter.value = 0;
  }

  const handleFavorite = (num) => {
    favorite.value = num;
  }

  /**
   * Adds a number to the `numberList` array if it doesn't already exist.
   * If the number is found in the list, it logs a message to the console.
   * 
   * @param {number} number - The number to add to the list.
   * @returns {void}
  */
  const add = (number) => {
    const index = numberList.value.findIndex(num => num === number);

    if(index === -1){
      numberList.value.push(number);
    } else {
      console.log("this number is in the list");
    }
  }

  /**
   * Determines if the "Add" button should be available.
   * If the current `counter` value is found in the `numberList`, the button will be disabled.
   * 
   * @returns {boolean} - Returns `true` if the button should be disabled, `false` otherwise.
   */
  const buttonAvailable = computed(() => {
    const numberSearch = numberList.value.find(num => num === counter.value);

    if(numberSearch === 0){
      return true;
    }

    //If currently counter number is within array, the add button will be disabled
    return numberSearch ? true : false;

  });

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
      <button @click="add(counter)" :class="buttonAvailable ? 'button-disabled' : 'button'" :disabled="buttonAvailable">Add</button>
    </div>

  </main>

  <div class="section">
    <h3 class="title-list">Number list</h3>
    <h3 class="title-list">Favorite number: {{favorite}}</h3>
  </div>
  
  <ul class="list-numbers">
    <Number  
      v-for="(num, index) in numberList" 
      :key="index"
      :number="num"
      :id="index"
      :favorite="favorite"
      @handleFavorite = "handleFavorite"
    >{{num}}
    </Number>
  </ul>

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
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 columns */
    gap: 1rem; 
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
  }

  .main-buttons button:nth-child(4){
    grid-column: 2 / 3; /* Place in the second column */
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
    cursor: pointer;
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

  .section {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .title-list {
    margin: 2rem 0;
    color: #fff;
    text-transform: uppercase;
  }

  .list-numbers {
    display: grid;
    grid-template-columns: repeat(7, 1fr); /* 8 columns */
    gap: 1rem;
    list-style-type: none;
  }

  .button-disabled {
    background-color: #04AA6D; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    opacity: 0.6;
    cursor: not-allowed;
  }
</style>