<script lang="ts" setup>
import {Image, Spinner} from '$design';
import {TagList} from '$components/shared/TagList';
import {useAsyncData} from '#app';
import {useMovieProvider} from '$presentation/MovieProvider';

const movieProvider = useMovieProvider();

const {data: detailMovie, status} = await useAsyncData(async () => await movieProvider.findOne(), {lazy: true});
</script>

<template>
  <main class="page">
    <section v-if="detailMovie && status === 'success'" class="detail-container">
      <div class="left-container">
        <h1>{{ detailMovie.name }}</h1>
        <Image class="poster" :src="detailMovie.poster" :alt="detailMovie.name" />
        <TagList :duration="detailMovie.duration" :genre="detailMovie.genre" :score="detailMovie.rating" />
      </div>
      <div class="right-container">
        <h1>Description</h1>
        <p>{{ detailMovie.description }}</p>
        <h1>Trivia</h1>
        <ul>
          <li v-for="trivia in detailMovie.trivia" :key="trivia">
            {{ trivia }}
          </li>
        </ul>
        <h1>Actors</h1>
        <ul>
          <li v-for="action in detailMovie.actors" :key="action.imdb_id">
            <a class="underline" target="_blank" :href="`https://www.imdb.com/name/${action.imdb_id}`">
              {{ action.name }}
            </a>
          </li>
        </ul>
      </div>
    </section>
    <div v-else class="loader">
      <Spinner />
    </div>
  </main>
</template>

<style lang="scss" scoped>
.page {
  display: flex;
  .detail-container {
    padding: 24px 46px;
    display: grid;
    grid-template-columns: 240px 340px;
    gap: 64px;
    .left-container {
      height: fit-content;
      top: 124px;
      position: sticky;
      display: flex;
      flex-direction: column;
      gap: 24px;
      .poster {
        border-radius: 0.5rem;
        aspect-ratio: 240/320;
      }
    }
    .right-container {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      p,
      a {
        font-weight: 500;
        font-size: var(--font_14);
      }
      ul li {
        margin-left: 1rem;
        font-weight: 500;
        font-size: var(--font_14);
      }
      .underline {
        font-weight: 500;
        font-size: var(--font_14);
        text-decoration: underline;
      }
    }
    @media screen and (max-width: 768px) {
      grid-template-columns: 170px 1fr;
      gap: 1rem;
    }
    @media screen and (max-width: 488px) {
      display: flex;
      flex-direction: column;
      padding: 1rem;
      .left-container {
        position: unset;
      }
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
