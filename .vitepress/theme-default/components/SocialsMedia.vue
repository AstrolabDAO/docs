<template>
  <div class="nav-icons">
    <!-- <template v-for="link of [repo, discord, telegram, twitter, medium]"> -->
    <div v-if="repo" class="item"
      ><a class="nav-btn" :href="repo" target="_blank" :aria-label="repo"><bi-github /></a
    ></div>
    <div v-if="discord" class="item"
      ><a class="nav-btn" :href="discord" target="_blank" :aria-label="discord"><bi-discord /></a
    ></div>
    <!-- <div v-if="telegram" class="item"><a class="nav-btn" :href="telegram" target="_blank" :aria-label="telegram"><bi-telegram/></a></div> -->
    <div v-if="twitter" class="item"
      ><a class="nav-btn" :href="twitter" target="_blank" :aria-label="twitter"><bi-twitter /></a
    ></div>
    <div v-if="medium" class="item"
      ><a class="nav-btn" :href="medium" target="_blank" :aria-label="medium"><bi-medium /></a
    ></div>
  </div>
</template>

<script setup lang="ts">
  import { useLinks } from '../composables/links';

  const { repo, discord, telegram, twitter, medium } = useLinks().value;
</script>

<style scoped>
  .link {
    display: inline-block;
    font-size: 1rem;
    font-weight: 500;
    color: var(--c-text-light);
  }

  .link:hover {
    text-decoration: none;
    color: var(--c-brand);
  }

  .icon {
    margin-left: 4px;
  }
</style>
