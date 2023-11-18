import { defineConfig } from 'vite';
import { resolve } from 'path';
import eslint from 'vite-plugin-eslint';
import checker from 'vite-plugin-checker';

export default defineConfig({
  	root: resolve(__dirname),
	build: {
	outDir: resolve(__dirname, 'dist'),
	rollupOptions: {},
	},
	plugins: [
		checker({
		  typescript: true,
		}),
		eslint()
  	]
});
