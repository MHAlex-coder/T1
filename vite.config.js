import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const base = mode === 'production'
    ? (process.env.VITE_BASE_PATH || './')
    : '/'

  return {
    plugins: [react()],
    base,
  }
})
