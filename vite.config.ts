import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import Markdown from 'vite-plugin-md'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), Markdown()],
  resolve: {
    alias: {
      buffer: "buffer",
    }
  }
})
