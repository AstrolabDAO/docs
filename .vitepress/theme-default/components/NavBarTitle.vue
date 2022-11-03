<template>
  <a
    class="nav-bar-title"
    :href="$withBase($localePath)"
    :aria-label="`${$siteByRoute.title}, back to home`"
  >
    <img class="logo" :src="isDark ? $withBase($themeConfig.logoDark) : $withBase($themeConfig.logoLight)" alt="Logo" />
    {{ $site.title }}
  </a>
</template>

<script setup lang="ts">
  import { ref, onBeforeUnmount } from 'vue';

  const checkDark = () => document.documentElement.classList.contains('dark');
  const isDark = ref(checkDark());

  const observer = new MutationObserver(() => {
    isDark.value = checkDark();
  });

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class'],
  });

  onBeforeUnmount(() => {
    observer.disconnect();
  });
</script>

<style scoped>
  .nav-bar-title {
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--c-text);
  }

  .nav-bar-title:hover {
    text-decoration: none;
  }

  .logo {
    margin-right: 0.75rem;
    height: 1.3rem;
    vertical-align: bottom;
  }
</style>
