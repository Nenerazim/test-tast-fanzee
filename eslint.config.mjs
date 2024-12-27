import {createConfigForNuxt} from '@nuxt/eslint-config/flat';
export default createConfigForNuxt({}, [
  {
    rules: {
      '@typescript-eslint/no-extraneous-class': 'off'
    }
  }
]).override('nuxt/vue/rules', {
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/html-self-closing': 'off',
    'vue/no-v-html': 'off',
    'vue/require-v-for-key': 'off'
  }
});
