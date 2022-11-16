import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      stream: 'stream-browserify',
      crypto: 'crypto-browserify',
      process: 'process/browser.js',
    },
  },
  plugins: [react()],
  // define: { // only usage on development
  //   'process.env': {
  //     NODE_DEBUG: false,
  //   },
  // },
});
