import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import commonjs from "@rollup/plugin-commonjs";

export default defineConfig({
  plugins: [
    commonjs(),
    createHtmlPlugin({
      minify: false,
      pages: [
        {
          entry: "src/main.ts",
          filename: "index.html",
          template: "index.html",
          injectOptions: {
            data: {
              title: "index",
              injectScript: `<script src="./inject.js"></script>`,
            },
          },
        },
        {
          entry: "src/main.ts",
          filename: "about.html",
          template: "about.html",
          injectOptions: {
            data: {
              title: "other page",
              injectScript: `<script src="./inject.js"></script>`,
            },
          },
        },
      ],
    }),
  ],
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        format: "cjs",
        assetFileNames: (assetInfo) => {
          let extType = `${assetInfo.name}`.split(".").pop();
          if (/png|jpe?g|svg|gif|tiff|bmp|ico|mp4/i.test(`${extType}`)) {
            extType = "img";
          } else if (/ttf|eot|woff|woff2/.test(`${extType}`)) {
            extType = "fonts";
          }
          return `assets/${extType}/[name][extname]`;
        },
        chunkFileNames: "assets/js/[name].js",
        entryFileNames: "assets/js/[name].js",
      },
    },
  },
});
