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
            imageBaseUrl: 'https://image.tmdb.org/t/p/' // URL base delle immagini
        };
    },
    methods: {
        // Metodo per costruire l'URL completo dell'immagine
        getImageUrl(path, size = 'w342') {
            return `${this.imageBaseUrl}${size}${path}`;
        },
        // Metodo per convertire il voto in stelle (1-5)
        convertVoteToStars(vote) {
            // Arrotonda per eccesso dopo aver diviso per 2 per ottenere un valore tra 1 e 5
            return Math.ceil(vote / 2);
        },
        // Metodo per ottenere un array di stelle da mostrare
        getStars(vote) {
            const fullStars = this.convertVoteToStars(vote);
            const emptyStars = 5 - fullStars;
            return {
                fullStars: new Array(fullStars).fill(true),
                emptyStars: new Array(emptyStars).fill(false)
            };
        }
    }
}
</script>

<template>
    <ul>
        <!-- Ciclo per i film -->
        <li v-for="(film, index) in store.results" :key="index">
            <span>{{ film.title }} - {{ film.original_title }}</span>
            <!-- Aggiungi l'immagine del film -->
            <img :src="getImageUrl(film.poster_path)" v-if="film.poster_path">
            <ul>
                <li>{{ film.original_language }}
                    <ChangeFlag :languageCode="film.original_language" />
                </li>
                <li>
                    <!-- Mostra le stelle -->
                    <span v-for="(isFull, starIndex) in getStars(film.vote_average).fullStars" :key="'full-' + starIndex">
                        <i class="fas fa-star"></i>
                    </span>
                    <span v-for="(isEmpty, starIndex) in getStars(film.vote_average).emptyStars" :key="'empty-' + starIndex">
                        <i class="far fa-star"></i>
                    </span>
                </li>
            </ul>
        </li>
        <!-- Ciclo per le serie TV -->
        <li v-for="(tv, index) in store.resultTv" :key="index + store.results.length">
            <span>{{ tv.name }} - {{ tv.original_name }}</span>
            <!-- Aggiungi l'immagine della serie TV -->
            <img :src="getImageUrl(tv.poster_path)" v-if="tv.poster_path">
            <ul>
                <li>{{ tv.original_language }}
                    <ChangeFlag :languageCode="tv.original_language" />
                </li>
                <li>
                    <!-- Mostra le stelle -->
                    <span v-for="(isFull, starIndex) in getStars(tv.vote_average).fullStars" :key="'full-' + starIndex + store.results.length">
                        <i class="fas fa-star"></i>
                    </span>
                    <span v-for="(isEmpty, starIndex) in getStars(tv.vote_average).emptyStars" :key="'empty-' + starIndex + store.results.length">
                        <i class="far fa-star"></i>
                    </span>
                </li>
            </ul>
        </li>
    </ul>
</template>

<style scoped>
ul {
    list-style-type: none;
    padding: 0;
}

li {
    margin: 10px 0;
}

img {
    max-width: 150px; 
    border-radius: 8px; 
}
</style>