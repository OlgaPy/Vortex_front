<script setup lang="ts">
import SiteNavigationPanelWidget from "@/widgets/site-navigation-widget/SiteNavigationPanelWidget.vue";
import AdInfoPanelWidget from "@/widgets/AdInfoPanelWidget.vue";
import ProfilePanelWidget from "@/widgets/profile-panel-widget/ProfilePanelWidget.vue";
import SiteInfoPanel from "@/widgets/SiteInfoPanel.vue";
import TrendsFeedWidget from "@/widgets/trends-feed-widget/TrendsFeedWidget.vue";
import DesktopPageUI from "@/shared/ui/page-ui/DesktopPageUI.vue";
</script>

<template>
	<DesktopPageUI>
		<aside :class="$style.sidebar">
			<SiteNavigationPanelWidget :class="$style.siteNavigationPanel"/>
		</aside>
		<main :class="$style.main">
			<TrendsFeedWidget/>
		</main>
		<aside :class="$style.sidebar">
			<ProfilePanelWidget :class="$style.profilePanelWidget"/>
			<SiteInfoPanel :class="$style.siteInfoPanel"/>
			<AdInfoPanelWidget :class="$style.adInfoPanel"/>
		</aside>
	</DesktopPageUI>
</template>

<style module>
.sidebar, .main {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 300px;
}
.main {
	width: 700px;
}

.siteNavigationPanel, .adInfoPanel,
.profilePanelWidget, .siteInfoPanel {
	margin-bottom: 32px;
}
</style>
