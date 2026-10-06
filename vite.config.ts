import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  /** GitHub Pages: https://geraldosense.github.io/Marcas/ */
  base: "/Marcas/",
});
