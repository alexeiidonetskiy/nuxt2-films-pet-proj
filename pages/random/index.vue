<template>
  <div class="mb-8 mt-8 flex flex-col items-center justify-center">
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded max-w-xs w-full"
      @click="debouncedRefetch"
    >
      Refetch
    </button>
    <div
      class="flex justify-center align-center flex-wrap flex-3 gap-3 mt-8 mb-8"
    >
      <ListMovieCard :movie="movie" />
    </div>
  </div>
</template>

<script>
import { debounce } from "vue-debounce";

export default {
  data: function () {
    return { movie: [] };
  },
  methods: {
    debouncedRefetch: debounce(function () {
      this.refetch();
    }, 300),
    async refetch() {
      try {
        const { results } = await this.$axios.$get(
          "https://moviesdatabase.p.rapidapi.com/titles/random",
          {
            headers: {
              "X-RapidAPI-Key":
                "52bb5e76d6msh6388326968734d1p125fbdjsn00b535242707",
              "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
            },
            params: {
              limit: 1,
              list: "most_pop_movies",
            },
          }
        );

        // Update the movie data in the component's state
        this.movie = results[0];
      } catch (error) {
        console.log("Error fetching data", error);
      }
    },
  },
  async asyncData({ $axios, route }) {
    try {
      const { results } = await $axios.$get(
        "https://moviesdatabase.p.rapidapi.com/titles/random",
        {
          headers: {
            "X-RapidAPI-Key":
              "52bb5e76d6msh6388326968734d1p125fbdjsn00b535242707",
            "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
          },
          params: {
            limit: 1,
            list: "most_pop_movies",
          },
        }
      );
      return { movie: results[0] };
    } catch (e) {
      console.log("e", e);
      return { movie: [] };
    }
  },
};
</script>

<style>
</style>
