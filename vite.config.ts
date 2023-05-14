import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import UnoCSS from "unocss/vite";
import presetIcons from "@unocss/preset-icons";
import presetUno from "@unocss/preset-uno";
import presetAttributify from "@unocss/preset-attributify";

export default defineConfig({
  plugins: [
    solidPlugin(),
    UnoCSS({
      mode: "shadow-dom",
      shortcuts: [{
        logo: "i-logos-solidjs-icon w-6em h-6em transform transition-800 hover:rotate-360"
      }],
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
          extraProperties: {
            display: "inline-block",
            "vertical-align": "middle"
          }
        })
      ]
    })],
  build: {
    target: "esnext",
    lib: {
      entry: "src/index.ts",
      name: "solid-web-components",
      formats: ["es", "umd"],
      fileName: (format) => {
        return format === "es" ? "index.js" : `index.${format}.js`;
      }
    },
    outDir: "dist",
    rollupOptions: {
      output: {
        globals: {
          "solid-js": "Solid",
          "solid-js/web": "Solid",
          unocss: "Unocss"
        }
      },
      external: ["solid-js", "solid-js/web", "unocss"]
    }
  }
});
