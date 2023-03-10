import { defineClientConfig } from '@vuepress/client'
import pinia from '@/stores/store'
import { faqInit } from "@/utils/faqInit";
import Layout from '@/layouts/Layout'
import NotFound from '@/layouts/NotFound.vue'

export default defineClientConfig({
    enhance({ app, router, siteData }){
        // @ts-ignore
        app.use(pinia)
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
