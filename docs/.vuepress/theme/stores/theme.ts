// stores/theme.ts
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
    state: () => ({
        isDarkMode: <Boolean> false
    }),

    actions: {
        changeCurrenTheme(isDarkMode) {
            this.isDarkMode = isDarkMode
        },
    },
})
