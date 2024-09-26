import { defineStore } from "pinia";
import { ref } from "vue";

export const useFavoritesStore = defineStore('favoritesComm', () => {
    const favorites = ref([]);

    const add = (comment) => {
        //console.log(comment)
        favorites.value.push(comment);
    }

    const remove = (comment) => {
        favorites.value = favorites.value.filter(item => item.id !== comment.id);
    }

    const findComment = (id) => {
        return favorites.value.find(item => item.id === id);
    }

    return{
        favorites,
        add,
        remove,
        findComment
    }
})