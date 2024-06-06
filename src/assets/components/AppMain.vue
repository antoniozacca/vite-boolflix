<script>
import { store } from '../../store';
import ChangeFlag from './ChangeFlag.vue';

export default {
    name: "AppMain",
    components: {
        ChangeFlag
    },
    data() {
        return {
            store,
        };
    }
}
</script>

<template>
    <ul>
        <li v-for="(film, index) in store.results" :key="index">
            <span>{{ film.title }} - {{ film.original_title }}</span>
            <ul>
                <li>{{ film.original_language }}
                    <ChangeFlag :languageCode="film.original_language" />
                </li>
                <li>{{ film.vote_average }}</li>
            </ul>
        </li>
    </ul>
    <ul>
        <li v-for="(film, index) in store.resultTv" :key="index">
            <span>{{ film.name }} - {{ film.original_name }}</span>
            <ul>
                <li>{{ film.original_language }}
                    <ChangeFlag :languageCode="film.original_language" />
                </li>
                <li>{{ film.vote_average }}</li>
            </ul>
        </li>
    </ul>
</template>