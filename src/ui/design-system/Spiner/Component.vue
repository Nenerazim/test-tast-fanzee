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
  <div class="spinner-container" :style="{height: props.height, width: props.width}">
    <div class="spinner" />
  </div>
</template>

<style lang="scss" scoped>
.spinner-container {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .spinner {
    width: 48px;
    height: 48px;
    border: 5px solid rgb(var(--colors_blue));
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }
}
</style>
