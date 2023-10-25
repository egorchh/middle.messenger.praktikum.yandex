import { defineConfig, PluginOption } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import eslint from 'vite-plugin-eslint';
import { resolve } from 'path';

export default defineConfig({
  root: resolve(__dirname),
  build: {
    outDir: resolve(__dirname, 'dist'),
    rollupOptions: {
      input: {
        base: resolve(__dirname, "index.html"),
        400: resolve(__dirname, "src/pages/ErrorPages/Page400/400-index.html"),
        500: resolve(__dirname, "src/pages/ErrorPages/Page500/500-index.html"),
        auth: resolve(__dirname, "src/pages/AuthPage/auth-page.html"),
        registration: resolve(__dirname, "src/pages/RegistrationPage/registration-page.html"),
        profile: resolve(__dirname, "src/pages/RegistrationPage/profile-page.html"),
        chat: resolve(__dirname, "src/pages/ChatPage/chat-page.html"),
      },
    },
  },
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData:
            '@import "./src/styles/variables.scss";',
      },
    },
    modules: {
      generateScopedName: '[local]_[hash:base64:3]'
    }
  },
  plugins: [
    eslint(),
    handlebars({
      partialDirectory: resolve(__dirname, 'src/partials'),
      context: {
        global: 'global'
      }
    }) as PluginOption
  ],
});
