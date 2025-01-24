import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

const config = {
  plugins: [react()],
}

// https://vite.dev/config/
export default defineConfig(config);
