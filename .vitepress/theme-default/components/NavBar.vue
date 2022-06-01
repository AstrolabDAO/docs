<template>
	<header class="nav-bar">
		<ToggleSideBarButton @toggle="$emit('toggle')" />

		<NavBarTitle />

		<div class="flex-grow" />

		<dark-mode-switch/>
		<slot name="search" />
		<div class="nav">
			<NavLinks />
		</div>

		<div class="nav-icons">
			<!-- <template v-for="link of [repo, discord, telegram, twitter, medium]"> -->
			<div v-if="repo" class="item"><a class="nav-btn" :href="repo" target="_blank" :aria-label="repo"><bi-github/></a></div>
			<div v-if="discord" class="item"><a class="nav-btn" :href="discord" target="_blank" :aria-label="discord"><bi-discord/></a></div>
			<!-- <div v-if="telegram" class="item"><a class="nav-btn" :href="telegram" target="_blank" :aria-label="telegram"><bi-telegram/></a></div> -->
			<div v-if="twitter" class="item"><a class="nav-btn" :href="twitter" target="_blank" :aria-label="twitter"><bi-twitter/></a></div>
			<div v-if="medium" class="item"><a class="nav-btn" :href="medium" target="_blank" :aria-label="medium"><bi-medium/></a></div>

		</div>
	</header>
</template>

<script setup lang="ts">
	import { defineEmits } from 'vue';
	import NavBarTitle from './NavBarTitle.vue';
	import NavLinks from './NavLinks.vue';
	import ToggleSideBarButton from './ToggleSideBarButton.vue';
	import DarkModeSwitch from './DarkModeSwitch.vue';
	import { useLinks } from '../composables/links';

	defineEmits(['toggle']);

	const { repo, discord, telegram, twitter, medium } = useLinks().value;

</script>

<style scoped>
	.nav-bar {
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		z-index: var(--z-index-navbar);
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid var(--c-divider);
		padding: 0.7rem 1.5rem 0.7rem 4rem;
		height: var(--header-height);
		background-color: var(--c-bg);
	}

	@media (min-width: 720px) {
		.nav-bar {
			padding: 0.7rem 1.5rem;
		}
	}

	.flex-grow {
		flex-grow: 1;
	}

	.nav {
		display: none;
	}

	@media (min-width: 720px) {
		.nav {
			display: flex;
		}
		.navbar__dark-mode {
			display: none;
		}
	}

	.nav-icons {
		display: flex;
		padding: 2px 0 0;
		align-items: center;
		border-bottom: 0;
		margin-left: 12px;
	}

	.nav-icons .item {
		padding-left: 12px;
	}
</style>
