import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import eslintConfig from "./eslint.config";

const config = {
  plugins: [react(), eslintConfig()],
}

// https://vite.dev/config/
export default defineConfig(config);
