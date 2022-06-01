import { computed } from 'vue'
import { useSiteDataByRoute } from 'vitepress'
import type { DefaultTheme } from '../config'

export function useLinks() {
  const site = useSiteDataByRoute()

  return computed(() => {
    const theme = site.value.themeConfig as DefaultTheme.Config
    const repo = theme?.docsRepo || theme?.repo
    const discord = theme?.discord;
    const telegram = theme?.telegram;
    const twitter = theme?.twitter;
    const medium = theme?.medium;

    return { repo, discord, telegram, twitter, medium }
  })
}
