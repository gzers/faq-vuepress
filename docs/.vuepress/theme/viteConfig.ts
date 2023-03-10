import {viteBundler} from "@vuepress/bundler-vite";
import vueJsx from "@vitejs/plugin-vue-jsx";
import autoImport from 'unplugin-auto-import/vite';
import components from "unplugin-vue-components/vite";
import { path } from "@vuepress/utils";
import { VarletUIResolver } from 'unplugin-vue-components/resolvers'

export default {
    bundler: viteBundler({
        viteOptions: {
            css: {
                //* css模块化
                modules: { // css模块化 文件以.module.[css|less|scss]结尾
                    generateScopedName: '[name]__[local]___[hash:base64:5]',
                    hashPrefix: 'prefix',
                },
            },
            plugins: [
                vueJsx(),
                components({
                    resolvers: [
                        VarletUIResolver()
                    ]
                }),
                autoImport({
                    resolvers: [
                        VarletUIResolver({ autoImport: true })
                    ]
                }),
            ],
            ssr: {
                noExternal: ['varlet']
            },
            resolve: {
                alias: {
                    "@": path.resolve(__dirname, "./"),
                },
            },
        },
        vuePluginOptions: {},
    })
}