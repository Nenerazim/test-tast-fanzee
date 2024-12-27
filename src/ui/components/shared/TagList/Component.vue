<script lang="ts" setup>
import {Icon} from '$design';
import type {TagListProps} from './type';

defineProps<TagListProps>();

const selectScoreColor = (score: number) => {
  switch (true) {
    case score >= 1 && score <= 4:
      return 'red';
    case score > 4 && score <= 7:
      return 'violet';
    case score > 7 && score <= 10:
      return 'green';
    default:
      return 'green';
  }
};
</script>

<template>
  <div class="tag-list">
    <div :class="['tag', , selectScoreColor(score)]">
      <Icon :width="8" :height="8" name="stars" />
      <span class="text"> Score </span>
    </div>
    <div class="tag green">
      <Icon :width="8" :height="8" name="film" />
      <span class="text">
        {{ genre }}
      </span>
    </div>
    <div class="tag violet">
      <Icon :width="8" :height="8" name="clock" />
      <span class="text">
        {{ duration }}
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use 'sass:meta';
@include meta.load-css('style');
</style>
