import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { visualizer } from "rollup-plugin-visualizer";

// Temporary CI-only bundle report; not part of the application runtime.
export default defineConfig({
  tanstackStart: { server: { entry: "server" } },
  vite: {
    build: { sourcemap: true },
    plugins: [visualizer({ filename: "bundle-report.html", template: "treemap", gzipSize: true, brotliSize: true, emitFile: true, open: false })],
  },
});
