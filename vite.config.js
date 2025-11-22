import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Ganti 'anargya-gallery' dengan nama repository Anda di GitHub
const REPO_NAME = 'gallery_anargya'; 

// https://vitejs.dev/config/
export default defineConfig({
  base: `/${REPO_NAME}/`, 
  plugins: [vue()],
})