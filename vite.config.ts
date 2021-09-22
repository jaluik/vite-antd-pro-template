import { defineConfig } from 'vite';
import path from 'path';
import alias from '@rollup/plugin-alias';
import reactRefresh from '@vitejs/plugin-react-refresh';
import WindiCSS from 'vite-plugin-windicss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    alias({
      entries: [
        {
          find: '@',
          replacement: path.resolve(__dirname, 'src')
        }
      ]
    }),
    reactRefresh(),
    WindiCSS()
  ]
});
