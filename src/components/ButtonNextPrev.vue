<script setup>
    const props = defineProps(['pageStart', 'pageEnd', 'maxLength']);

    const emit = defineEmits(['handlePage']);

    //<div @click="emit('handleFavorite', number)" :class="isFavorite() ? 'number is-favorite' : 'number'">{{number}}</div>
</script>

<template>
    <div class="button-group">
        <button @click="emit('handlePage', false)" :class="pageStart <= 0 ? 'button-disabled' : 'button'" :disabled="pageStart <= 0">&laquo; Previous</button>
        <button @click="emit('handlePage', true)" :class="pageEnd >= maxLength ? 'button-disabled' : 'button'" :disabled="pageEnd >= maxLength">Next &raquo;</button>
    </div>
</template>

<style scoped>
    .button-group {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }

    .button {
        background-color: #04AA6D; /* Green */
        border: none;
        color: white;
        padding: .5rem 1.5rem;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 1rem;
        cursor: pointer;
    }

    .button:hover{
        cursor: pointer;
    }

    .button-disabled {
        background-color: #04AA6D; /* Green */
        border: none;
        color: white;
        padding: .5rem 1.5rem;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 1rem;
        cursor: pointer;
        opacity: 0.6;
        cursor: not-allowed;
    }
</style>