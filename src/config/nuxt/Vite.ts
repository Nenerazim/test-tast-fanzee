import type {ViteConfig} from '@nuxt/schema';

export const vite: ViteConfig = {
  server: {
    hmr: {
      host: 'shop-nuxt.local',
      port: 5174
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler'
      }
    }
  }
};
