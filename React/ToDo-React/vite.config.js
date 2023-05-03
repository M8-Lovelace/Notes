import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// Se usa para crear las rutas
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages
  base: "/ToDo-React/",
  resolve: {
    // Añadir alias en el proyecto
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      assets: path.resolve(__dirname, "./src/assets"),
      components: path.resolve(__dirname, "./src/components"),
      hooks: path.resolve(__dirname, "./src/hooks"),
      services: path.resolve(__dirname, "./src/services"),
      stores: path.resolve(__dirname, "./src/stores"),
      utils: path.resolve(__dirname, "./src/utils"),
      views: path.resolve(__dirname, "./src/views"),
    },
  },
});
