import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { viteCommonjs, esbuildCommonjs } from "@originjs/vite-plugin-commonjs";
import path from "path";
//const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [tsconfigPaths(), viteCommonjs(), react()],
  optimizeDeps: {
    esbuildOptions: {
      plugins: [esbuildCommonjs(["react-flagpack"])],
    },
  },
});
