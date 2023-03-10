import { defineComponent, ref } from 'vue';
// @ts-ignore
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'

export default defineComponent({
    setup() {
        return () => (
            <>
                {/*// @ts-ignore*/}
                    <ParentLayout>
                        {/*// @ts-ignore*/}
                        {/*<Content />*/}
                    </ParentLayout>
            </>
        )
    }
})
