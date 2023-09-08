<script setup lang="ts">
import {useMobileNavigationStore} from '@/shared/stores/MobileNavigationStore';
import StickyPanelUI from '@/shared/ui/block-ui/panels/StickyPanelUI.vue';
import MobilePageUI from '@/shared/ui/page-ui/MobilePageUI.vue';
import HeaderWidget from '@/widgets/HeaderWidget.vue';
import TrendsFeedWidget from '@/widgets/posts-feed-widget/PostsFeedWidget.vue';
import SidebarNavigationMobileWidget from '@/widgets/SidebarNavigationMobileWidget.vue';
import TapeLinksWidget from '@/widgets/TapeLinksWidget.vue';

const MobileNavigationStore = useMobileNavigationStore();
</script>

<template>
	<MobilePageUI>
		<StickyPanelUI>
			<HeaderWidget />
			<TapeLinksWidget />
      <SidebarNavigationMobileWidget v-if="MobileNavigationStore.showNavigationPage" />
    </StickyPanelUI>
		<TrendsFeedWidget />
	</MobilePageUI>
</template>

<style module></style>
