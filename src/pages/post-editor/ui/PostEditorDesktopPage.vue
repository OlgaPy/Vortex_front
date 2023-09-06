<script setup lang="ts">
import SiteNavigationPanelWidget from '@/widgets/site-navigation-widget/SiteNavigationPanelWidget.vue';
import AdInfoPanelWidget from '@/widgets/AdInfoPanelWidget.vue';
import ProfilePanelWidget from '@/widgets/profile-panel-widget/ProfilePanelWidget.vue';
import SiteInfoPanel from '@/widgets/SiteInfoPanel.vue';
import DesktopPageUI from '@/shared/ui/page-ui/DesktopPageUI.vue';
import PostEditorFooter from '@/pages/post-editor/ui/PostEditorFooter.vue';
import DesktopAsideBlockUI from '@/shared/ui/block-ui/DesktopAsideBlockUI.vue';
import DesktopMainBlockUI from '@/shared/ui/block-ui/DesktopMainBlockUI.vue';
import PostEditor from '@/widgets/post-editor/PostContentEditorWidget.vue';
import PostEditorHeader from '@/pages/post-editor/ui/PostEditorHeader.vue';
</script>

<template>
	<DesktopPageUI>
		<DesktopAsideBlockUI>
			<SiteNavigationPanelWidget :class="$style.siteNavigationPanel" />
		</DesktopAsideBlockUI>

		<DesktopMainBlockUI :class="$style.main">
			<PostEditorHeader />
			<PostEditor />
			<PostEditorFooter />
		</DesktopMainBlockUI>

		<DesktopAsideBlockUI>
			<ProfilePanelWidget :class="$style.profilePanelWidget" />
			<SiteInfoPanel :class="$style.siteInfoPanel" />
			<AdInfoPanelWidget :class="$style.adInfoPanel" />
		</DesktopAsideBlockUI>
	</DesktopPageUI>
</template>

<style module>
.main {
	gap: 20px;
}
</style>
