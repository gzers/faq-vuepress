import pinia from '@/stores/store'
import { useThemeStore } from "@/stores/theme";
const theme = useThemeStore(pinia)
const classSymbol = 'dark'

function findDarkClass(node, classSymbol) {
    let isSymbol = false
    if (node) {
        const { classList } = node
        if (classList && classList.length > 0) {
            classList.forEach(item => {
                if(item.indexOf(classSymbol) !== -1) {
                    isSymbol = true
                }
            })
        }
    }
    return isSymbol
}

function callback(mutations, observer){
    if (mutations[0].target) {
        // console.log('vuepress darkMode: ', mutations[0].target)
        const isDarkMode = findDarkClass(mutations[0].target, classSymbol)
        // 通过判断isDarkMode是否提交action，否则会导致死循环。
        if (theme.isDarkMode !== isDarkMode) {
            theme.changeCurrenTheme(isDarkMode)
        }
    }
}


export function getAssignHtmlObserver() {
    const html = document.getElementsByTagName('html')[0]
    const targetNodeChange = {
        attributes: true
    }

    const isDarkMode = findDarkClass(html, classSymbol)
    if (theme.isDarkMode !== isDarkMode) {
        theme.changeCurrenTheme(isDarkMode)
    }

    // 通过MutationObserver接口监视对html标签的data-theme变化，判断当前是否为暗黑模式。
    const mutationObserver = new MutationObserver(callback)
    mutationObserver.observe(html, targetNodeChange)
}
