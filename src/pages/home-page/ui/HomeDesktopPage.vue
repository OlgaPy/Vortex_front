<script setup lang="ts">
import AuthWidget from "@/widgets/auth-widget/AuthWidget.vue";
import SiteNavigationPanelWidget from '@/widgets/site-navigation-widget/SiteNavigationPanelWidget.vue';
import AdInfoPanelWidget from '@/widgets/AdInfoPanelWidget.vue';
import ProfilePanelWidget from '@/widgets/profile-panel-widget/ProfilePanelWidget.vue';
import SiteInfoPanel from '@/widgets/SiteInfoPanel.vue';
import TrendsFeedWidget from '@/widgets/trends-feed-widget/TrendsFeedWidget.vue';
import DesktopPageUI from '@/shared/ui/page-ui/DesktopPageUI.vue';
import DesktopAsideBlockUI from '@/shared/ui/block-ui/DesktopAsideBlockUI.vue';
import DesktopMainBlockUI from '@/shared/ui/block-ui/DesktopMainBlockUI.vue';
import {useProfileStore} from '@/entities/profile/model/ProfileStore';

const profileStore = useProfileStore();
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
			<ProfilePanelWidget v-if="profileStore.isAuth()" />
			<AuthWidget v-else />
			<SiteInfoPanel />
			<AdInfoPanelWidget />
		</DesktopAsideBlockUI>
	</DesktopPageUI>
</template>

<style module lang="scss"></style>
