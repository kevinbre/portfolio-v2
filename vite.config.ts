import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        /**
         * Split the vendor code out of the app bundle. React is needed for the
         * first paint, but the animation library is not, so shipping them as
         * one file makes the hero wait on bytes it does not use yet — and a
         * change to our own code no longer invalidates the whole download.
         */
        manualChunks: {
          react: ["react", "react-dom"],
          motion: ["motion"],
        },
      },
    },
  },
});
