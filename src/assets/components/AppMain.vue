<script>
import { store } from '../../store';
import ChangeFlag from './ChangeFlag.vue';
export default {
    name: "AppMain",
    components: {
        ChangeFlag
    },
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
            <li>
                {{ film.original_language }}
                <ChangeFlag :languageCode="film.original_language" />
            </li>
            <li>{{ film.vote_average }}</li>
        </li>
    </ul>
</template>