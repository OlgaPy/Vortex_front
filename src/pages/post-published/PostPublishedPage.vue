<script setup lang="ts">
import PostPublishedDesktop from './ui/PostPublishedDesktop.vue';
import PostPublishedMobile from './ui/PostPublishedMobile.vue';
import PostPublishedTable from './ui/PostPublishedTable.vue';
</script>

<template>
	<div>
		<div :class="$style.homeDesktopPage">
			<PostPublishedDesktop />
		</div>
		<div :class="$style.homeTablePage">
			<PostPublishedTable />
		</div>
		<div :class="$style.homeMobilePage">
			<PostPublishedMobile />
		</div>
	</div>
</template>

<style lang="scss" module>
.homeDesktopPage,
.homeTablePage,
.homeMobilePage {
	display: none;
}

@media screen and (min-width: $screen-xs) and (max-width: $screen-lg) {
	.homeMobilePage {
		display: flex;
	}
}

@media screen and (min-width: $screen-lg) and (max-width: $screen-xl) {
	.homeTablePage {
		display: flex;
	}
}

@media screen and (min-width: $screen-xl) {
	.homeDesktopPage {
		display: flex;
	}
}
</style>
