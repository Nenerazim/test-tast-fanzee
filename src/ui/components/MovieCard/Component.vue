<script lang="ts" setup>
import {TagList} from '$components/shared/TagList';
import {Image} from '$design';
import type {IMovieEntity} from '$domain/abstracts/Movie';

defineProps<{card: IMovieEntity}>();
</script>

<template>
  <NuxtLink :to="`/movie/${card.id}`" class="card-movie-container">
    <Image :src="card.poster" :alt="card.name" />
    <div class="info">
      <h2>{{ card.name }}</h2>
      <p class="card-des">{{ card.description }}</p>
    </div>
    <TagList :score="card.rating" :genre="card.genre" :duration="card.duration" />
  </NuxtLink>
</template>

<style lang="scss" scoped>
@use 'sass:meta';
@include meta.load-css('style');
</style>
