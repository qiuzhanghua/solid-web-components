import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import path from "path";

export default defineConfig({
  plugins: [solidPlugin()],
    build: {
        target: "es6",
        lib: {
            entry: path.resolve(__dirname, "src/index.ts"),
            name: "hello-solid",
            fileName: (format) => `hello-solid.${format}.js`
        },
        outDir: "dist/web"
    }
});
