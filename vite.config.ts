import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// keramikskottrup.github.io is served from the domain root
export default defineConfig({
  base: "/",
  plugins: [react()],
});
