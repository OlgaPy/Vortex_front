<script setup lang="ts">
import {useProfileStore} from '@/entities/profile/model/ProfileStore';
import DesktopAsideColumnUI from '@/shared/ui/block-ui/columns/DesktopAsideColumnUI.vue';
import DesktopCentralColumnUI from '@/shared/ui/block-ui/columns/DesktopCentralColumnUI.vue';
import DesktopPageUI from '@/shared/ui/page-ui/DesktopPageUI.vue';
import AdInfoPanelWidget from '@/widgets/AdBlockWidget.vue';
import AuthWidget from "@/widgets/auth-widget/AuthWidget.vue";
import TrendsFeedWidget from '@/widgets/posts-feed-widget/PostsFeedWidget.vue';
import ProfilePanelWidget from '@/widgets/profile-panel-widget/ProfilePanelWidget.vue';
import SiteNavigationPanelWidget from '@/widgets/site-navigation-widget/SiteNavigationWidget.vue';
import SiteInfoPanel from '@/widgets/LinksBlockWidget.vue';

const profileStore = useProfileStore();
</script>

<template>
	<DesktopPageUI>
		<DesktopAsideColumnUI>
			<SiteNavigationPanelWidget />
		</DesktopAsideColumnUI>
		<DesktopCentralColumnUI>
			<TrendsFeedWidget />
		</DesktopCentralColumnUI>
		<DesktopAsideColumnUI>
			<ProfilePanelWidget v-if="profileStore.isAuth()" />
			<AuthWidget v-else />
			<SiteInfoPanel />
			<AdInfoPanelWidget />
		</DesktopAsideColumnUI>
	</DesktopPageUI>
</template>

<style module lang="scss"></style>
