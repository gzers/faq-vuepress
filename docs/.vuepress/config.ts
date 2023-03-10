import {faqTheme} from "./theme";
// @ts-ignore
import {defineUserConfig} from "vuepress";
import viteConfig from "./theme/viteConfig";
import {home, menu} from "./config/menu";
import {locales} from "./config/locales";

export default defineUserConfig({
    theme: faqTheme({
        logo: '/images/logo.png',
        home: home.link,
        navbar: menu,
        locales: locales.theme,
    }),
    ...viteConfig,
    locales: locales.site,
    head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
    port: 8991
})
