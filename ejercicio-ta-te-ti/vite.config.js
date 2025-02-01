import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import eslintConfig from './eslint.config'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), eslintConfig()],
})
