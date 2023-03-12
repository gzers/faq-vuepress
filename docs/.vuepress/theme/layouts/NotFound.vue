<script setup lang="ts">
import { ref, h } from 'vue'
import { useRouteLocale } from '@vuepress/client'
// @ts-ignore
import { useThemeLocaleData } from '@vuepress/plugin-theme-data/client'

const routeLocale = useRouteLocale()
const themeLocale = useThemeLocaleData()

const messages = themeLocale.value.notFound ?? ['Not Found']
const getMsg = (): string => messages[Math.floor(Math.random() * messages.length)]
const homeLink = themeLocale.value.home ?? routeLocale.value
const homeText = themeLocale.value.backToHome ?? 'Back to home'
const svgImage = ref(`/images/not-found/not-found-${Math.floor(Math.random() * 4)}.svg`)
</script>

<template>
  <div class="theme-container">
    <main class="page">
      <div class="theme-default-content">
        <img
            :src="svgImage"
            style="height: 500px; width: 500px"
            alt="404"
        />
        <blockquote>{{ getMsg() }}</blockquote>
        <RouterLink :to="homeLink">
          {{homeText}}
        </RouterLink>
      </div>
    </main>
  </div>
</template>
