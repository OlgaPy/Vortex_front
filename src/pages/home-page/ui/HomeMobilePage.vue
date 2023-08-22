<script setup lang="ts">
import TrendsFeedWidget from '@/widgets/trends-feed-widget/TrendsFeedWidget.vue'
import TapeMenu from '@/widgets/TapeLinksWidget.vue'
import Header from '@/widgets/HeaderWidget.vue'
import MobilePageUI from '@/shared/ui/page-ui/MobilePageUI.vue'
</script>

<template>
	<MobilePageUI>
		<header :class="[$style.headerContainer, 'color-bg-gray-98']">
			<Header/>
			<TapeMenu/>
		</header>
		<TrendsFeedWidget/>
	</MobilePageUI>
</template>

<style module>
.headerContainer {
	position: sticky;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 1;
}
</style>
