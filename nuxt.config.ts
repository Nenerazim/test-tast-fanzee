import {fileURLToPath} from 'url';
import {srcDir, buildDir, dir, typescript, devServer, modules, plugins, css, runtimeConfig, vite} from './src/config/nuxt';
export default defineNuxtConfig({
  app: {
    head: {
      link: [{rel: 'stylesheet', href: '/fonts/fonts.css', media: 'print', onload: "this.media='all'"}]
    },
    pageTransition: {name: 'page', mode: 'out-in'}
  },

  modules,
  plugins,
  devtools: {enabled: true},
  css,
  runtimeConfig,
  dir,
  srcDir,
  buildDir,

  alias: {
    $data: fileURLToPath(new URL('./src/app/data', import.meta.url)),
    $domain: fileURLToPath(new URL('./src/app/domain', import.meta.url)),
    $application: fileURLToPath(new URL('./src/app/application', import.meta.url)),
    $presentation: fileURLToPath(new URL('./src/app/presentation', import.meta.url)),
    $shared: fileURLToPath(new URL('./src/app/shared', import.meta.url)),
    $components: fileURLToPath(new URL('./src/ui/components', import.meta.url)),
    $widgets: fileURLToPath(new URL('./src/ui/widgets', import.meta.url)),
    $design: fileURLToPath(new URL('./src/ui/design-system', import.meta.url)),
    $sass: fileURLToPath(new URL('./src/ui/sass', import.meta.url))
  },

  devServer,

  experimental: {
    asyncContext: true
  },

  vite,
  typescript,
  compatibilityDate: '2024-12-26'
});