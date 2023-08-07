<template>
  <div
    class="flex justify-center align-center flex-wrap flex-3 gap-3 mt-8 mb-8"
  >
    <ListMovieCard :movie="movie" />
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, route }) {
    try {
      const { results } = await $axios.$get(
        "https://moviesdatabase.p.rapidapi.com/titles/" + route.params.id,
        {
          headers: {
            "X-RapidAPI-Key":
              "52bb5e76d6msh6388326968734d1p125fbdjsn00b535242707",
            "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
          },
        }
      );
      return { movie: results };
    } catch (e) {
      console.log("e", e);
      return { movie: [] };
    }
  },
};
</script>

<style>
</style>
