<script setup lang="ts">
import GoToPrevPage from '@/features/GoToPrevPage.vue';
import PostEditorFooter from '@/pages/post-editor/ui/PostEditorFooter.vue';
import PostEditorHeader from '@/pages/post-editor/ui/PostEditorHeader.vue';
import {useMobileNavigationStore} from '@/shared/stores/MobileNavigationStore';
import StickyPanelUI from '@/shared/ui/block-ui/panels/StickyPanelUI.vue';
import MobileCentralColumn from '@/shared/ui/block-ui/columns/MobileCentralColumn.vue';
import MobilePageUI from '@/shared/ui/page-ui/MobilePageUI.vue';
import HeaderWidget from '@/widgets/HeaderWidget.vue';
import PostEditor from '@/widgets/post-editor/PostContentEditorWidget.vue';
import SidebarNavigationMobileWidget from '@/widgets/SidebarNavigationMobileWidget.vue';

const MobileNavigationStore = useMobileNavigationStore();
</script>

<template>
	<MobilePageUI>
		<StickyPanelUI>
			<HeaderWidget>
				<template #left-content>
					<GoToPrevPage>Создать пост</GoToPrevPage>
				</template>
			</HeaderWidget>
			<SidebarNavigationMobileWidget v-if="MobileNavigationStore.showNavigationPage" />
		</StickyPanelUI>

		<MobileCentralColumn :class="$style.postEditor">
			<PostEditorHeader />
			<PostEditor />
			<PostEditorFooter />
		</MobileCentralColumn>
	</MobilePageUI>
</template>

<style module>
.postEditor {
	padding: 28px 12px 0 12px;
	gap: 20px;
}
</style>
