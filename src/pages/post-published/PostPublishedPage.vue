<script setup lang="ts">

import PostPublishedDesktop from './ui/PostPublishedDesktop.vue'
import PostPublishedMobile from './ui/PostPublishedMobile.vue'
import PostPublishedTable from './ui/PostPublishedTable.vue'
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


@media screen and (min-width: 360px) and (max-width: 844px) {
	.homeMobilePage {
		display: flex;
	}
}

@media screen and (min-width: 844px) and (max-width: 1280px) {
	.homeTablePage {
		display: flex;
	}
}


@media screen and (min-width: 1280px) {
	.homeDesktopPage {
		display: flex;
	}
}
</style>
