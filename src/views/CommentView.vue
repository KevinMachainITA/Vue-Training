<script setup>
import axios from "axios";
import {useRoute, useRouter} from "vue-router";
import {useData} from "../composables/useData.js";
import {useFavoritesStore} from "../store/favoritesComm.js"
import CommentCard from "../components/CommentCard.vue"

const route = useRoute();
const router = useRouter();
const {data, getData, loading, error} = useData();
const useFavorites = useFavoritesStore();

const {add, findComment} = useFavorites;

getData(`https://jsonplaceholder.typicode.com/comments/${route.params.id}`);
</script>

<template>
    <div v-if="loading">
        <p>loading...</p>
    </div>
    <div v-else class="comment-card">
        <p v-if="error">{{error}}</p>
        <CommentCard
            :comment="data"
        >
        </CommentCard>
        <button :disabled="findComment(data.id)" class="button-3" @click="add(data)">Add</button>
    </div>
</template>

<style scoped>
.comment-card {
    display:flex;
    flex-direction: column;
    justify-content: center;
    gap: .5rem;
}

/* CSS */
.button-3 {
  appearance: none;
  background-color: #2ea44f;
  border: 1px solid rgba(27, 31, 35, .15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, .1) 0 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  max-width: 20%;
  margin-top: 1rem;
  font-family: -apple-system,system-ui,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  padding: 6px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
}

.button-3:focus:not(:focus-visible):not(.focus-visible) {
  box-shadow: none;
  outline: none;
}

.button-3:hover {
  background-color: #2c974b;
}

.button-3:focus {
  box-shadow: rgba(46, 164, 79, .4) 0 0 0 3px;
  outline: none;
}

.button-3:disabled {
  background-color: #94d3a2;
  border-color: rgba(27, 31, 35, .1);
  color: rgba(255, 255, 255, .8);
  cursor: default;
}

.button-3:active {
  background-color: #298e46;
  box-shadow: rgba(20, 70, 32, .2) 0 1px 0 inset;
}
</style>