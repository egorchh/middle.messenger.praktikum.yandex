import { defineConfig, PluginOption } from 'vite';
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';
import svgLoader from 'vite-svg-loader';
import eslint from 'vite-plugin-eslint';
import checker from 'vite-plugin-checker';
import context from "./src/__fixtures__/contextMock";

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
		eslint(),
		handlebars({
			partialDirectory: resolve(__dirname, 'src/components'),
			context
		}) as PluginOption,
		svgLoader(),
  	]
});
