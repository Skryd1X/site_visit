import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/site_visit/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
