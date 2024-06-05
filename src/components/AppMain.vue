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
            {{ film.title }}
        </li>
    </ul>
</template>