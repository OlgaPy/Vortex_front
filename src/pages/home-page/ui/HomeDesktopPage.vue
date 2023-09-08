<script setup lang="ts">
import {useProfileStore} from '@/entities/profile/model/ProfileStore';
import DesktopAsideBlockUI from '@/shared/ui/block-ui/DesktopAsideBlockUI.vue';
import DesktopMainBlockUI from '@/shared/ui/block-ui/DesktopMainBlockUI.vue';
import DesktopPageUI from '@/shared/ui/page-ui/DesktopPageUI.vue';
import AdInfoPanelWidget from '@/widgets/AdInfoPanelWidget.vue';
import AuthWidget from "@/widgets/auth-widget/AuthWidget.vue";
import TrendsFeedWidget from '@/widgets/posts-feed-widget/PostsFeedWidget.vue';
import ProfilePanelWidget from '@/widgets/profile-panel-widget/ProfilePanelWidget.vue';
import SiteNavigationPanelWidget from '@/widgets/site-navigation-widget/SiteNavigationPanelWidget.vue';
import SiteInfoPanel from '@/widgets/SiteInfoPanel.vue';

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
