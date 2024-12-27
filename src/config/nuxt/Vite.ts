import type {ViteConfig} from '@nuxt/schema';

export const vite: ViteConfig = {
  server: {
    hmr: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler'
      }
    }
  }
};
