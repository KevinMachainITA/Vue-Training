<script setup>
import {RouterLink} from 'vue-router';
import { storeToRefs } from "pinia";
import {useFavoritesStore} from "../store/favoritesComm.js"

const useFavorites = useFavoritesStore();

const {remove} = useFavorites;

const props = defineProps({
  comment: Object,
});

</script>

<template>
  <div class="comment-card">
    <h1 class="comment-title">{{ comment?.name }}</h1>
    <p class="comment-body">{{comment?.body}}</p>
    <div class="comment-footer">
      <h4>{{comment?.email}}</h4>
      <button @click="remove(comment)" >Remove</button>
    </div>
  </div>
</template>

<style scoped>
.comment-card {
    display: flex;
    flex-direction: column;
    gap: .5rem;
    max-width: 35rem;
    margin: 1rem 0;
    color: #fff;
    border-bottom: solid;
    border-width: .05rem;
    padding-bottom: .5rem;
}

.comment-title {
    font-size: 1rem;
    font-weight: 600;
}

.comment-body{
    font-size: .8rem;
    line-height: 1.25;
}

.comment-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  font-size: .8rem;
  color: #cececece;
}
</style>