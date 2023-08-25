<script setup lang="ts">
import TrendsFeedWidget from '@/widgets/trends-feed-widget/TrendsFeedWidget.vue'
import TapeMenu from '@/widgets/TapeLinksWidget.vue'
import Header from '@/widgets/HeaderWidget.vue'
import MobilePageUI from '@/shared/ui/page-ui/MobilePageUI.vue'
import { useMobileNavigationStore } from '@/shared/stores/MobileNavigationStore'
import SidebarNavigationMobileWidget from '@/widgets/SidebarNavigationMobileWidget.vue'
const MobileNavigationStore = useMobileNavigationStore()
</script>

<template>
	<MobilePageUI>
		<header :class="[$style.headerContainer, 'color-bg-gray-98']">
			<Header />
			<TapeMenu />
		</header>
		<SidebarNavigationMobileWidget v-if="MobileNavigationStore.showNavigationPage" />
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
