import {viteBundler} from "@vuepress/bundler-vite";
import vueJsx from "@vitejs/plugin-vue-jsx";
// import AutoImport from 'unplugin-auto-import/vite';
// import Components from "unplugin-vue-components/vite";
import { path } from "@vuepress/utils";

export default {
    bundler: viteBundler({
        viteOptions: {
            plugins: [
                vueJsx(),
                // AutoImport({
                //     resolvers: [
                //     ],
                // }),
                // Components({
                //     resolvers: [
                //     ]
                // })
            ],
            resolve: {
                alias: {
                    "@": path.resolve(__dirname, "./"),
                },
            },
        },
        vuePluginOptions: {},
    })
}