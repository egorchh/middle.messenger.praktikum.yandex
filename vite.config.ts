import { defineConfig, PluginOption } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import eslint from 'vite-plugin-eslint';
import { resolve } from 'path';

export default defineConfig({
  root: resolve(__dirname),
  build: {
    outDir: resolve(__dirname, 'dist')
  },
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
    ],
  },
  plugins: [
    eslint(),
    handlebars({
      partialDirectory: resolve(__dirname, 'src/partials'),
      context: {
        username: 'Egor', // будет доступно во всех используемых шаблонах
        age: 12
      }
    }) as PluginOption
  ],
});
