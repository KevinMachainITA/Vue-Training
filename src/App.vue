<script setup>
const name = "Vue 3";
const arrayFruits = [
  {
    name: "Apple",
    price: "$1.00",
    description: "An apple",
    stock: 20,
  },
  {
    name: "Grape",
    price: "$2.00",
    description: "A grape",
    stock: 0,
  },
  {
    name: "Orange",
    price: "$3.00",
    description: "An orange",
    stock: 5,
  },
];
</script>

<template>
  <h1>!HI {{ name.toUpperCase() }}!</h1>
  <ul>
    <template v-for="(fruit, index) in arrayFruits" :key="index">
      <li v-if="fruit.stock > 0">
        {{ index }} {{ fruit.name }} - {{ fruit.price }} - {{ fruit.description }}
      </li>
    </template>
  </ul>
</template>

<style>
  h1 {
    color: #fff;
  }
</style>