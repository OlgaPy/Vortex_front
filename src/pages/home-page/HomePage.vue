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

@media screen and (min-width: $screen-xs) and (max-width: $screen-xl) {
	.homeMobilePage {
		display: flex;
	}
}

@media screen and (min-width: $screen-xl) {
	.homeDesktopPage {
		display: flex;
	}
}
</style>
