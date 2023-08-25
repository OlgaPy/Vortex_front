<script setup lang="ts">
import HomeDesktopPage from './ui/HomeDesktopPage.vue'
import HomeMobilePage from './ui/HomeMobilePage.vue'
</script>

<template>
	<div>
		<div :class="$style.homeDesktopPage">
			<HomeDesktopPage />
		</div>
		<div :class="$style.homeMobilePage">
			<HomeMobilePage />
		</div>
	</div>
</template>

<style lang="scss" module>
.homeDesktopPage,
.homeMobilePage {
	display: none;
}

@media screen and (min-width: 360px) and (max-width: 1280px) {
	.homeMobilePage {
		display: flex;
	}
}

@media screen and (min-width: 1280px) {
	.homeDesktopPage {
		display: flex;
	}
}
</style>
