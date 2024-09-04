import { reactive } from "vue";

export const store = reactive ({
    results: [],
    resultTv: [],
    info: {},
    apiUrlMovie: 'https://api.themoviedb.org/3/search/movie',
    apiUrlTv: 'https://api.themoviedb.org/3/search/tv',
    apiUrlPopular: 'https://api.themoviedb.org/3/movie/popular',
    apiKey: '?api_key=6ce7dae274d1b0b6bf782a5f37d51b8e',
});