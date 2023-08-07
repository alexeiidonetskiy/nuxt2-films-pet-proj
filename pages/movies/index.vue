<template>
  <div>
    <div class="flex justify-center align-center flex-wrap flex-3 gap-3 mt-8 mb-8">
      <ListMovieCard v-for="movie in movies" v-bind:key="movie.id" :movie="movie" />
    </div>
  </div>
  </template>

<script>
export default {
  data: function () {
    return {
      movies: []
    }
  },
  async asyncData({ $axios }) {
    try {
      const { results } = await $axios.$get(
        "https://moviesdatabase.p.rapidapi.com/titles",
        {
          headers: {
            "X-RapidAPI-Key":
              "52bb5e76d6msh6388326968734d1p125fbdjsn00b535242707",
            "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
          },
          params: {
            list: 'top_rated_series_250'
          }
        }
      );
      
      return { movies: results }
      
    } catch (e) {
      console.log("e", e);
      return { movies: [] }
    }
  },
};
</script>

<style>
</style>
