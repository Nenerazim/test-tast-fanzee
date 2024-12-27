<script lang="ts" setup>
import {onMounted} from 'vue';
import type {ImageProps} from '$design/Image/type';

const props = withDefaults(defineProps<ImageProps>(), {
  src: 'image/image-not-found.webp',
  alt: 'not-found'
});

const srcImg = ref(props.src);

onMounted(() => {
  const img = new Image();
  img.src = props.src;
  img.onerror = () => {
    srcImg.value = 'image/image-not-found.webp';
  };
});
</script>

<template>
  <img loading="lazy" :src="srcImg" :alt />
</template>
