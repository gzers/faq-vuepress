import {viteBundler} from "@vuepress/bundler-vite";
import vueJsx from "@vitejs/plugin-vue-jsx";
import autoImport from 'unplugin-auto-import/vite';
import components from "unplugin-vue-components/vite";
import { path } from "@vuepress/utils";
import { QuasarResolver } from 'unplugin-vue-components/resolvers'
// @ts-ignore

export default {
    bundler: viteBundler({
        viteOptions: {
            css: {
                preprocessorOptions: {
                    scss: {
                        sassOptions: {
                            // ignore sass deprecation errors
                            quietDeps: true
                        }
                    }
                }
            },
            plugins: [
                vueJsx(),
                components({
                    resolvers: [
                        QuasarResolver()
                    ]
                }),
                autoImport({
                    resolvers: [
                        QuasarResolver()
                    ]
                }),
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