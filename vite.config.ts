import { defineConfig } from 'vite';
import * as path from 'path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    global: { test: 1 },
  },
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: 'generated',
        replacement: path.resolve(__dirname, 'src/generated'),
      },
      {
        find: 'i18n',
        replacement: path.resolve(__dirname, 'src/i18n'),
      },
      {
        find: 'components',
        replacement: path.resolve(__dirname, 'src/components'),
      },
      {
        find: 'hooks',
        replacement: path.resolve(__dirname, 'src/hooks'),
      },
      {
        find: 'constants',
        replacement: path.resolve(__dirname, 'src/constants'),
      },
      {
        find: 'context',
        replacement: path.resolve(__dirname, 'src/context'),
      },
      {
        find: 'styles',
        replacement: path.resolve(__dirname, 'src/styles'),
      },
      {
        find: 'pages',
        replacement: path.resolve(__dirname, 'src/pages'),
      },
      {
        find: 'apollo',
        replacement: path.resolve(__dirname, 'src/apollo'),
      },
      {
        find: 'utils',
        replacement: path.resolve(__dirname, 'src/utils'),
      },
    ],
  },
});
