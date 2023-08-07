<template>
  <NuxtLink
    v-if="movie.primaryImage"
    :to="`/movies/${movie.id}`"
    class="block max-w-xs"
  >
    <b-card
      tag="article"
      style="max-width: 20rem"
      class="block"
    >
      <b-img-lazy class="card-img-top" :src="movie.primaryImage.url" @error.native="onError" />
      <b-card-body :title="movie.originalTitleText.text">
        <p>Released: {{ movie.releaseYear.year }}</p>
        <p>Title type: {{ movie.titleType.text }}</p>
      </b-card-body>
    </b-card>
  </NuxtLink>
</template>

<script>
export default {
  props: ["movie"],
  methods: {
    onError (e) {
      console.log('e', e);
      e.target.src = 'https://m.media-amazon.com/images/M/MV5BMzczMzM3M2EtY2E1MS00ZjA2LTg0ZjctOWNjZWMxN2NkYzFkXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_.jpg';
    }
  }
};
</script>

<style>
</style>
