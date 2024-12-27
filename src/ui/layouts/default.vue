<script setup lang="ts">
import {Header} from '$components/shared/Header';
import {Footer} from '$components/shared/Footer';
</script>

<template>
  <div class="application">
    <Header />
    <slot />
    <Footer />
  </div>
</template>
