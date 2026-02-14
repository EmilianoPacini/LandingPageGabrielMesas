import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-three': ['three', '@react-three/fiber', '@react-three/drei', '@react-three/postprocessing'],
          'vendor-framer': ['framer-motion'],
          'vendor-gsap': ['gsap', '@gsap/react'],
          'vendor-utils': ['lenis', '@studio-freight/react-lenis']
        }
      }
    },
    chunkSizeWarningLimit: 1000 // Increase limit to avoid warnings until necessary
  }
})
