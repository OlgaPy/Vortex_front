<script setup lang="ts">
import SiteNavigationPanelWidget from '@/widgets/site-navigation-widget/SiteNavigationPanelWidget.vue'
import AdInfoPanelWidget from '@/widgets/AdInfoPanelWidget.vue'
import ProfilePanelWidget from '@/widgets/profile-panel-widget/ProfilePanelWidget.vue'
import SiteInfoPanel from '@/widgets/SiteInfoPanel.vue'
import TrendsFeedWidget from '@/widgets/trends-feed-widget/TrendsFeedWidget.vue'
import DesktopPageUI from '@/shared/ui/page-ui/DesktopPageUI.vue'
import DesktopAsideBlockUI from '@/shared/ui/block-ui/DesktopAsideBlockUI.vue'
import DesktopMainBlockUI from '@/shared/ui/block-ui/DesktopMainBlockUI.vue'
</script>

<template>
	<DesktopPageUI>
		<DesktopAsideBlockUI>
			<SiteNavigationPanelWidget />
		</DesktopAsideBlockUI>
		<DesktopMainBlockUI>
			<TrendsFeedWidget />
		</DesktopMainBlockUI>
		<DesktopAsideBlockUI>
			<ProfilePanelWidget />
			<SiteInfoPanel />
			<AdInfoPanelWidget />
		</DesktopAsideBlockUI>
	</DesktopPageUI>
</template>

<style module lang="scss">
</style>
