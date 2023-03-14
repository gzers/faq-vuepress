import {viteBundler} from "@vuepress/bundler-vite";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { path } from "@vuepress/utils";

export default {
    bundler: viteBundler({
        viteOptions: {
            plugins: [
                vueJsx(),
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