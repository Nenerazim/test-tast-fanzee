<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    height?: string;
    width?: string;
  }>(),
  {
    width: '200px',
    height: '200px'
  }
);
</script>

<template>
  <div class="spinner" :style="{height: props.height, width: props.width}" />
</template>

<style lang="scss" scoped>
@use 'sass:meta';
@include meta.load-css('style');
</style>
