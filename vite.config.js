import { viteStaticCopy } from "vite-plugin-static-copy";

export default {
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: "node_modules/@cps-elements/web/assets/icons",
          dest: "assets",
        },
      ],
    }),
  ],
};
