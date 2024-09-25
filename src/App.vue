<script setup>
import { ref, computed, onMounted } from "vue";
import PostCard from "../src/components/PostCard.vue";
import ButtonNextPrev from "../src/components/ButtonNextPrev.vue";
import LoadingSpinner from "./components/LoadingSpinner.vue";

const postForPage = 10;

const listPost = ref([]);
const favoritePost = ref({});
const pageStart = ref(0);
const pageEnd = ref(postForPage);
const loading = ref(true);

const fetchData = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    listPost.value = data;
  } catch (error) {
    console.log("Error:", error);
  } finally {
    //forced to show spinner
    setTimeout(()=> {
      loading.value = false;
    }, 1500)
  }
};

/**
 * Determines if the click is to 10 next posts or 10 previuos posts, True is to next and False is to previuos.
 *
 * @param {boolean} clickPage - The boolean to determine click.
 * @returns {void}
 */
const handlePage = (clickPage) => {
  if (clickPage && pageEnd.value < listPost.value.length) {
    pageStart.value += postForPage;
    pageEnd.value += postForPage;
  } else if (!clickPage && pageStart.value > 0) {
    pageStart.value -= postForPage;
    pageEnd.value -= postForPage;
  }
};

const handleFavoritePost = (post) => {
  favoritePost.value = post;
};

const maxLength = computed(() => listPost.value.length);

onMounted(() => {
  fetchData();
});
</script>

<template>
  <div class="spinner" v-if="loading">
    <LoadingSpinner></LoadingSpinner>
  </div>

  <main class="container" v-else>
    <h1>List Posts</h1>
    <ButtonNextPrev
      :pageStart="pageStart"
      :pageEnd="pageEnd"
      @handlePage="handlePage"
      :maxLength="maxLength"
    ></ButtonNextPrev>
    <div class="post-title">
      <h3 class="post-favorite">Favorite post id: {{ favoritePost.id }}</h3>
      <h4 class="post-pagination">{{ pageStart + 1 }}-{{ pageEnd }}</h4>
    </div>

    <section>
      <PostCard
        v-for="post in listPost.slice(pageStart, pageEnd)"
        :key="post.id"
        :post="post"
        @handleFavoritePost="handleFavoritePost"
      ></PostCard>
    </section>
  </main>
</template>

<style>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
}

h1 {
  color: #fff;
  font-size: 4rem;
  text-align: center;
}

.post-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
}

.post-favorite {
  color: #fff;
  margin-top: 1rem;
}

.post-pagination {
  margin-top: 1rem;
  color: #e3e3e3;
}

.spinner {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>