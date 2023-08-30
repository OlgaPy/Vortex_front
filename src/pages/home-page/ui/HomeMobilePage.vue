<script setup lang="ts">
import TrendsFeedWidget from '@/widgets/trends-feed-widget/TrendsFeedWidget.vue';
import TapeLinksWidget from '@/widgets/TapeLinksWidget.vue';
import HeaderWidget from '@/widgets/HeaderWidget.vue';
import MobilePageUI from '@/shared/ui/page-ui/MobilePageUI.vue';
import { useMobileNavigationStore } from '@/shared/stores/MobileNavigationStore';
import SidebarNavigationMobileWidget from '@/widgets/SidebarNavigationMobileWidget.vue';
import HeaderHorizontalPanelUI from '@/shared/ui/HeaderHorizontalPanelUI.vue';

const MobileNavigationStore = useMobileNavigationStore();
</script>

<template>
	<MobilePageUI>
		<HeaderHorizontalPanelUI>
			<HeaderWidget />
			<TapeLinksWidget />
		</HeaderHorizontalPanelUI>
		<SidebarNavigationMobileWidget v-if="MobileNavigationStore.showNavigationPage" />
		<TrendsFeedWidget />
	</MobilePageUI>
</template>

<style module></style>
