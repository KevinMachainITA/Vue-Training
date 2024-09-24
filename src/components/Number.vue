<script setup>
    const props = defineProps(['number', 'id', 'favorite']);

    const emit = defineEmits(['handleFavorite']);

    const isFavorite = () => {
        if(props.favorite === props.number){
            return true;
        } else {
            return false;
        }
    }
</script>

<template>
    <li @click="emit('handleFavorite', number)" :class="isFavorite() ? 'number is-favorite' : 'number'">{{number}}</li>
</template>

<style scoped>
    .number {
        text-align: center;
        color: #fff;
        border-style: solid;
        border-width: .05rem;
    }

    .is-favorite {
        background-color: #cccccc;
        color: #000;
    }

    .number:hover {
        cursor: pointer;
        background-color: #cccccc;
        color: #000;
    }
</style>
