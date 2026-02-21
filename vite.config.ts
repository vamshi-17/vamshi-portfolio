import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/vamshi-portfolio/",
  server: {
    port: 3000,
    open: true, // Automatically open the app in the browser
  },
  build: {
    outDir: "build",
    sourcemap: true, // Generate source maps for easier debugging
  },
});
