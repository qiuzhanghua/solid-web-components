import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  plugins: [solidPlugin({
      extensions: ["tsx", "ts"]
  })],
    build: {
        target: "es6",
        lib: {
            entry: "src/index.ts",
            name: "hello-solid",
            fileName: (format) => `hello-solid.${format}.js`
        },
        outDir: "dist"
    }
});
