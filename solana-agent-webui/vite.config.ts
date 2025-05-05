import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    nodePolyfills({
      // Options for node polyfills
      // See https://github.com/davidmyersdev/vite-plugin-node-polyfills
      globals: {
        Buffer: true, // Provide a global Buffer
        global: true,
        process: true, // Provide a global process
      },
      protocolImports: true, // Allow 'node:' imports
    }),
  ],
})
