import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/static/",
  build: {
    outDir: "../guildmanager_project/static",
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [react()]
})
