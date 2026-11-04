import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { visualizer } from "rollup-plugin-visualizer";

// This config is used only by the Phase 6 analysis workflow.
// It retains the repository's Lovable/TanStack build integration.
export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    build: {
      sourcemap: true,
    },
    plugins: [
      visualizer({
        filename: "bundle-report.html",
        template: "treemap",
        gzipSize: true,
        brotliSize: true,
        open: false,
      }),
    ],
  },
});
