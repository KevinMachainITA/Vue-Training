<script setup>
  const name = "Vue 3";
  const arrayFruits = [
    {
      name: "Apple",
      price: "$1.00",
      description: "An apple",
    },
    {
      name: "Grape",
      price: "$2.00",
      description: "A grape",
    },
    {
      name: "Orange",
      price: "$3.00",
      description: "An orange",
    },
  ];
</script>

<template>
  <h1>!HI {{ name.toUpperCase() }}!</h1>
  <ul>
    <li v-for="(fruit, index) in arrayFruits" :key="index">
      {{index}} {{fruit.name }} - {{fruit.price}} - {{fruit.description}}
    </li>
  </ul>
</template>

<style>

  h1{
    color: #fff;
  }

</style>