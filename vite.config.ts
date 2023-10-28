import { defineConfig, PluginOption } from 'vite';
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';
import eslint from 'vite-plugin-eslint';
import card from "./src/layouts/card/card";
import page from "./src/layouts/page/page";
import popup from "./src/layouts/popup/popup";
import context from "./src/__fixtures__/contextMock";

export default defineConfig({
  root: resolve(__dirname),
  build: {
    outDir: resolve(__dirname, 'dist'),
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        400: resolve(__dirname, "src/pages/errors/400/index.html"),
        500: resolve(__dirname, "src/pages/errors/500/index.html"),
        auth: resolve(__dirname, "src/pages/sign-in/index.html"),
        registration: resolve(__dirname, "src/pages/sign-up/index.html"),
        profile: resolve(__dirname, "src/pages/profile/index.html"),
        chat: resolve(__dirname, "src/pages/chat/index.html"),
        tooltips: resolve(__dirname, "src/pages/tooltips/index.html"),
        popups: resolve(__dirname, "src/pages/popups/index.html"),
      },
    },
  },
  plugins: [
    eslint(),
    handlebars({
      partialDirectory: resolve(__dirname, 'src/components'),
      helpers: {
        card,
        page,
        popup
      },
      context
    }) as PluginOption
  ]
});
