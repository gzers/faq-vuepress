import { defineClientConfig } from '@vuepress/client'
import pinia from '@/stores/store'
import { faqInit } from "@/utils/faqInit";
import Layout from '@/layouts/Layout'
import NotFound from '@/layouts/NotFound.vue'
import Varlet from '@varlet/ui'
import '@varlet/touch-emulator'
import '@vuepress/plugin-palette/style'
import '@/styles/index.scss'
import '@varlet/ui/es/style.css'

export default defineClientConfig({
    enhance({ app, router, siteData }){
        // @ts-ignore
        app.use(pinia).use(Varlet)
        app.mixin({
            mounted() {
                faqInit()
            },
        })
    },
    setup() { },
    rootComponents: [],
    layouts: {
        Layout,
        NotFound,
    },
})
