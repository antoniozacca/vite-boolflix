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
      this.tvGen(),
      this.imgCopertinaTv()
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
          this.store.resultTv = response.data.results
        })
    },
    imgCopertinaTv(){
      let url = `${this.store.urlBaseImg}${this.store.imgSize}${this.store.results.backdrop_path}`
      axios.get(url).then(response => {
        this.store.resultImg = response.data.results
      })
    }
  }
}
</script>

<template>
  <nav class="navbar bg-black">
    <div class="container-fluid">
      <h1 class="navbar-brand boolflix">BoolFlix</h1>
      <form class="d-flex" @submit.prevent="seachAll">
        <input class="form-control me-2" v-model="search" type="text" placeholder="Scegli il tuo film">
        <button class="btn btn-outline color-red border-red">Cerca</button>
      </form>

    </div>

  </nav>
  <AppMain />
</template>

<style scoped>
.boolflix{
  color: red;
  font-size: xx-large;
}
.color-red{
  color: red;
}
.border-red{
  border: 1px solid red;
}
</style>