<script setup lang="ts">
import type {IIconProps} from './type';

const className = 'icon';

withDefaults(defineProps<IIconProps>(), {
  svgClass: undefined,
  color: 'neutral',
  height: 24,
  width: 24,
  strokeWidth: 0
});
</script>

<template>
  <svg :key="name" :class="[className, svgClass, {color}]" :style="{width: `${width}px`, height: `${height}px`, 'stroke-width': strokeWidth}">
    <use :width="width" :height="height" :href="`/sprites/icons.svg#${name}`" />
  </svg>
</template>

<style lang="scss" scoped>
@use 'sass:meta';
@include meta.load-css('style');
</style>
