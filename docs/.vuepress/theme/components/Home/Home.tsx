import {
    defineComponent,
} from 'vue';

const HomeBanner = () => (
    <>
        {/*<HomeHeroImage/>*/}
        <h1>首页</h1>
    </>
)

export default defineComponent({
    setup() {
        return () => (
            <main class="home">
                <HomeBanner/>
            </main>
        )
    }
})