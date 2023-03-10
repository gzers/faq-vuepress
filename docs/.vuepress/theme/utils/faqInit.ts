import { getAssignHtmlObserver } from "@/utils/themeSync";

export function faqInit() {
    // 获取vuePress的darkMode，并存入pinia。
    getAssignHtmlObserver()
}