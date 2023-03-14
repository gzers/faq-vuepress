// stores/theme.ts
import { defineStore } from 'pinia'
import { StyleProvider, Themes } from '@varlet/ui'
import {themeType} from "@/types/theme";

export const useThemeStore = defineStore('theme', {
    state: () => ({
        isDarkMode: <Boolean> false
    }),

    actions: {
        changeDark(isDarkMode) {
            this.isDarkMode = isDarkMode
            StyleProvider(this.isDarkMode ? Themes.dark : null)
        },
        changeTheme(themeConfig: themeType) {
            const rootStyleVars = {
                '--color-primary': themeConfig.primaryColor
            }
            StyleProvider(rootStyleVars)
        }
    },
})
