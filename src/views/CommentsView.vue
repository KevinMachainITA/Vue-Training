<script setup>
import axios from "axios";
import CommentCard from "../components/CommentCard.vue";
import { computed, ref } from "vue";
import {useData} from "../composables/useData.js"

const {data, getData, loading, error} = useData();
getData("https://jsonplaceholder.typicode.com/comments");

const paginated = 10;

const startIndex = ref(0);
const endIndex = ref(paginated);

const comments = computed(() => {
  return Array.isArray(data.value) ? data.value : [data.value];
});

const maxLength = computed(() => comments.value.length);

const handlePaginatedPrev = () => {
  if (startIndex.value > 0) {
    startIndex.value -= paginated;
    endIndex.value -= paginated;
  }
};

const handlePaginatedNext = () => {
  if (endIndex.value < comments.value.length) {
    startIndex.value += paginated;
    endIndex.value += paginated;
  }
};
</script>

<template>
  <div v-if="loading">
    <p>loading...</p>
  </div>
  <div v-else class="comments-section">
    <h2 class="comments-title">Comments</h2>
    <p v-if="error">{{error}}</p>
    <div v-else class="comments-info">
      <span>{{ startIndex + 1 }}-{{ endIndex }} of {{ maxLength }}</span>
      <div class="button-group">
        <button @click="handlePaginatedPrev" class="previous round">
          &laquo;
        </button>
        <button @click="handlePaginatedNext" class="next round">&raquo;</button>
      </div>
    </div>
    <CommentCard
      v-for="comment in data?.slice(startIndex, endIndex)"
      :key="comment.id"
      :comment="comment"
    ></CommentCard>
  </div>
</template>

<style scoped>
.comments-section {
  max-height: 35rem;
  margin: 2rem 0;
  overflow-y: scroll;
}

.comments-title {
  color: hsla(160, 100%, 37%, 1);
}

.comments-info {
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
}

.button-group {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

button {
  all: unset;
  display: inline-block;
  padding: 8px 16px;
  color: #fff;
}

button:hover {
  background-color: #04aa6d;
  cursor: pointer;
}

.round {
  border-radius: 50%;
}

.comments-section::-webkit-scrollbar {
  width: 0.3rem;
}

.comments-section::-webkit-scrollbar-track {
  background: #000000;
}

.comments-section::-webkit-scrollbar-thumb {
  background-color: #323232;
}

.comments-section::-webkit-scrollbar-thumb:hover {
  background-color: #555;
}
</style>