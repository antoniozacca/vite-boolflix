<script>
import { store } from '../store.js'
export default {
    name: "AppMain",
    data(){
        return{
            store,
        }
    }
}
</script>
<template>
    <ul>
        <li v-for="film in store.results">
            {{ film.title }} -
            {{ film.original_title }}
            <li>{{ film.original_language }}</li>
            <li>{{ film.vote_average }}</li>
        </li>
    </ul>
</template>