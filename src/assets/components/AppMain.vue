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
    <ul class="film-list mt-5 margin-left">
      <!-- Ciclo per i film -->
      <li class="poster-container" v-for="(film, index) in store.results" :key="index">
        <!-- Immagine del film -->
        <div class="image-wrapper">
          <img :src="getImageUrl(film.poster_path)" alt="Poster del film" v-if="film.poster_path" class="poster-image">
          <div class="overlay">
            <span class="title color-red">Titolo: {{ film.title }}</span>
            <span class="title color-red">Titolo originale: {{ film.original_title }}</span>
            <ul class="details">
              <li>Nazionalità: {{ film.original_language }}
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
          </div>
        </div>
      </li>
      <!-- Ciclo per le serie TV -->
      <li class="poster-container" v-for="(tv, index) in store.resultTv" :key="index + store.results.length">
        <!-- Immagine della serie TV -->
        <div class="image-wrapper">
          <img :src="getImageUrl(tv.poster_path)" alt="Poster della serie TV" v-if="tv.poster_path" class="poster-image">
          <div class="overlay">
            <span class="title color-red">Titolo: {{ tv.name }}</span>
            <span class="title color-red">Titolo originale: {{ tv.original_name }}</span>
            <ul class="details">
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
          </div>
        </div>
      </li>
    </ul>
  </template>

<style scoped>
/* Rimuove i punti elenco e padding */
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

/* Contenitore di ciascun film o serie */
.poster-container {
  width: 150px; /* Larghezza massima per i poster */
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s; /* Effetto zoom al passaggio del mouse */
}

.poster-container:hover {
  transform: scale(1.05); /* Leggero ingrandimento al passaggio del mouse */
}

/* Wrapper per immagine e overlay */
.image-wrapper {
  position: relative;
  width: 100%;
}

/* Immagine del poster */
.poster-image {
  width: 100%;
  display: block;
  border-radius: 8px;
  transition: opacity 0.3s; /* Transizione per l'effetto di scomparsa */
}

/* Overlay con il testo */
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s;
  padding: 10px;
  border-radius: 8px;
  font-size: xx-small;
}

/* Mostra l'overlay e nasconde l'immagine al passaggio del mouse */
.poster-container:hover .poster-image {
  opacity: 0;
}

.poster-container:hover .overlay {
  opacity: 1;
  visibility: visible;
}

/* Stili per il titolo e i dettagli */
.title {
  font-size: 1.1em;
  margin-bottom: 5px;
  text-align: center;
}

.details {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.details li {
  margin: 5px 0;
}
.color-red{
  color: red;
}
.margin-left{
    margin-left: 5%;
}
</style>