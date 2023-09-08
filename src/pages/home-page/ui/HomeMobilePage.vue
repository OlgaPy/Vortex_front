<script setup lang="ts">
import {useMobileNavigationStore} from '@/shared/stores/MobileNavigationStore';
import HeaderHorizontalPanelUI from '@/shared/ui/block-ui/HorizontalPanelUI.vue';
import MobilePageUI from '@/shared/ui/page-ui/MobilePageUI.vue';
import HeaderWidget from '@/widgets/HeaderWidget.vue';
import SidebarNavigationMobileWidget from '@/widgets/SidebarNavigationMobileWidget.vue';
import TapeLinksWidget from '@/widgets/TapeLinksWidget.vue';
import TrendsFeedWidget from '@/widgets/posts-feed-widget/TrendsFeedWidget.vue';

const MobileNavigationStore = useMobileNavigationStore();
</script>

<template>
	<MobilePageUI>
		<HeaderHorizontalPanelUI>
			<HeaderWidget />
			<TapeLinksWidget />
      <SidebarNavigationMobileWidget v-if="MobileNavigationStore.showNavigationPage" />
    </HeaderHorizontalPanelUI>
		<TrendsFeedWidget />
	</MobilePageUI>
</template>

<style module></style>
