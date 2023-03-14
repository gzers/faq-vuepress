import type { Theme } from '@vuepress/core'
import { path } from '@vuepress/utils'
import { defaultTheme, type DefaultThemeOptions } from '@vuepress/theme-default'
// import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { palettePlugin } from '@vuepress/plugin-palette'

export const faqTheme = (options: DefaultThemeOptions): Theme => {
    return {
        name: 'vuepress-theme-faq',

        // 继承默认主题
        extends: defaultTheme(options),

        // 主题的客户端配置文件的路径
        clientConfigFile: path.resolve(__dirname, 'client.ts'),

        plugins: [
            // 自动注册组件
            // registerComponentsPlugin({
            //     componentsDir: path.resolve(__dirname, './components'),
            // }),
            palettePlugin({
                preset: 'sass'
            }),
        ],

        alias: {
            '@theme/Home.vue': path.resolve(__dirname, './components/Home/Home.tsx'),
        },
    }
}
