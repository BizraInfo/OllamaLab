import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  
  // Path resolution for clean imports
  resolve: {
    alias: {
      '@': resolve(fileURLToPath(new URL('./src', import.meta.url))),
      '@components': resolve(fileURLToPath(new URL('./src/components', import.meta.url))),
      '@pages': resolve(fileURLToPath(new URL('./src/pages', import.meta.url))),
      '@utils': resolve(fileURLToPath(new URL('./src/utils', import.meta.url))),
      '@hooks': resolve(fileURLToPath(new URL('./src/hooks', import.meta.url))),
      '@constants': resolve(fileURLToPath(new URL('./src/constants', import.meta.url))),
      '@types': resolve(fileURLToPath(new URL('./src/types', import.meta.url))),
      '@assets': resolve(fileURLToPath(new URL('./src/assets', import.meta.url))),
    },
  },

  // Development server configuration
  server: {
    port: 5173,
    host: true,
    strictPort: true,
    hmr: {
      overlay: true
    }
  },

  // Build optimizations for production
  build: {
    target: 'es2020',
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    minify: 'terser',
    
    // Code splitting configuration
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['framer-motion', 'react-icons'],
          utils: ['axios']
        }
      }
    },
    
    // Asset optimization
    chunkSizeWarningLimit: 1000,
  },

  // Performance optimizations
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion']
  },

  // Environment variables
  define: {
    __APP_VERSION__: JSON.stringify('1.0.0'),
  }
})
