import { mergeConfig } from "vite";
import { visualizer } from "rollup-plugin-visualizer";
import baseConfig from "./vite.config";

// This config is used only by the Phase 6 analysis workflow.
// The normal production Vite config and app dependencies remain unchanged.
export default mergeConfig(baseConfig, {
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
});
