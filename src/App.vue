<script>
import { store } from './store.js'
import axios from 'axios';
import AppMain from './assets/components/AppMain.vue';
export default {
  components :{
    AppMain,
  },
  data() {
    return {
      store,
      search: '',

    };
  },
  methods: {
    seachAll(){
      this.filmsGen(),
      this.tvGen()
    },
    filmsGen() {
      let url = `${this.store.apiUrlMovie}${this.store.apiKey}&query=${this.search}&language=it-IT`;
      axios.get(url)
        .then(response => {
          // console.log(response);
          // this.films.push(response.results)
          this.store.results = response.data.results

        })
    },
    tvGen(){
      let url = `${this.store.apiUrlTv}${this.store.apiKey}&query=${this.search}&language=it-IT`;
      axios.get(url)
        .then(response => {
          // console.log(response);
          // this.films.push(response.results)
          this.store.resultTv = response.data.resultTv
          console.log(response.data);
        })
    }
  }
}
</script>

<template>
  <form @submit.prevent="seachAll">
    <!-- v-model -->
    <input v-model="search" type="text">
    <button @click.prevent="filmsGen" >clicca qui</button>
  </form>
  <AppMain />
</template>

<style scoped>
</style>