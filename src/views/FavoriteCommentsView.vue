<script setup>
import { storeToRefs } from "pinia";
import {useFavoritesStore} from "../store/favoritesComm.js"
import FavoriteCard from "../components/FavoriteCard.vue"

const useFavorites = useFavoritesStore();

const {favorites} = storeToRefs(useFavorites);

</script>

<template>
    <div>
        <h1>Favorite comments</h1>
        <FavoriteCard
            v-for="favorite in favorites"
            :comment="favorite"
            :key="favorite.id"
        >
        </FavoriteCard>
    </div>
</template>