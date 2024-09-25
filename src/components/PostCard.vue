<script setup>
    const props = defineProps(['post']);

    const emit = defineEmits(['handleFavoritePost']);
</script>

<template>
    <div class="card" @click="emit('handleFavoritePost', post)">
        <h2 class="card-title">{{post.title}}</h2>
        <p>{{post.body}}</p>
    </div>
</template>

<style scoped>
    .card {
        max-width: 40rem;
        margin-top: 1rem;
        border-style: solid;
        border-width: .05rem;
        padding: .5rem 1rem;
        border-radius: .5rem;
        color: #fff;
    }

    .card:hover{
        cursor: pointer;
        background-color: #e3e3e3;
        color: #000;
    }

    .card-title {
        font-size: 1.5rem;
        text-align: start;
    }
</style>
