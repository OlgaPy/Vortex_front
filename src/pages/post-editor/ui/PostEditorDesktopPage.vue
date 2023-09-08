<script setup lang="ts">
import PostEditorFooter from '@/pages/post-editor/ui/PostEditorFooter.vue';
import PostEditorHeader from '@/pages/post-editor/ui/PostEditorHeader.vue';
import DesktopAsideColumnUI from '@/shared/ui/block-ui/columns/DesktopAsideColumnUI.vue';
import DesktopCentralColumnUI from '@/shared/ui/block-ui/columns/DesktopCentralColumnUI.vue';
import DesktopPageUI from '@/shared/ui/page-ui/DesktopPageUI.vue';
import AdInfoPanelWidget from '@/widgets/AdBlockWidget.vue';
import PostEditor from '@/widgets/post-editor/PostContentEditorWidget.vue';
import ProfilePanelWidget from '@/widgets/profile-panel-widget/ProfilePanelWidget.vue';
import SiteNavigationPanelWidget from '@/widgets/site-navigation-widget/SiteNavigationPanelWidget.vue';
import SiteInfoPanel from '@/widgets/LinksBlockWidget.vue';
</script>

<template>
	<DesktopPageUI>
		<DesktopAsideColumnUI>
			<SiteNavigationPanelWidget :class="$style.siteNavigationPanel" />
		</DesktopAsideColumnUI>

		<DesktopCentralColumnUI :class="$style.main">
			<PostEditorHeader />
			<PostEditor />
			<PostEditorFooter />
		</DesktopCentralColumnUI>

		<DesktopAsideColumnUI>
			<ProfilePanelWidget :class="$style.profilePanelWidget" />
			<SiteInfoPanel :class="$style.siteInfoPanel" />
			<AdInfoPanelWidget :class="$style.adInfoPanel" />
		</DesktopAsideColumnUI>
	</DesktopPageUI>
</template>

<style module>
.main {
	gap: 20px;
}
</style>
