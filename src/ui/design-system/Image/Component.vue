<script lang="ts" setup>
import {onMounted} from 'vue';

const props = withDefaults(defineProps<{src?: string; alt?: string}>(), {
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
  <img :src="srcImg" :alt />
</template>
