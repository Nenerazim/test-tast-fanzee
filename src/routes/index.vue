<script lang="ts" setup>
import {MovieCard} from '$components/MovieCard';
import {useMovieProvider} from '$presentation/MovieProvider';
import {Spinner} from '$design';
import {useAsyncData} from '#app';
const movieProvider = useMovieProvider();

const {data: movieCards, status} = await useAsyncData('movieCards', async () => await movieProvider.getAll(), {lazy: true});
</script>

<template>
  <main class="page">
    <section v-if="status === 'success' && movieCards?.items?.length" class="container">
      <MovieCard v-for="card in movieCards?.items" :key="card.id" :card="card" />
    </section>
    <div v-else-if="status === 'success'" class="loader">
      <h1>Movie not found</h1>
    </div>
    <div v-else class="loader">
      <Spinner />
    </div>
  </main>
</template>

<style lang="scss" scoped>
.page {
  display: flex;
  .container {
    gap: 1rem;
    padding: 32px 48px;
    display: grid;
    grid-template-columns: repeat(4, minmax(10vw, 1fr));
    @media screen and (max-width: 1440px) {
      grid-template-columns: repeat(auto-fill, minmax(306px, 1fr));
    }
    @media screen and (max-width: 768px) {
      padding: 0.75rem 1rem;
    }
    @media screen and (max-width: 488px) {
      grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    }
  }
  .loader {
    flex: 1;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
