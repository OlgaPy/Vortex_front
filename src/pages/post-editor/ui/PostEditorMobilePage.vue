<script setup lang="ts">
import HeaderWidget from '@/widgets/HeaderWidget.vue';
import SidebarNavigationMobileWidget from '@/widgets/SidebarNavigationMobileWidget.vue';
import MobilePageUI from '@/shared/ui/page-ui/MobilePageUI.vue';
import { useMobileNavigationStore } from '@/shared/stores/MobileNavigationStore';
import PostEditorHeader from '@/pages/post-editor/ui/PostEditorHeader.vue';
import PostEditor from '@/widgets/PostContenEditorWidget.vue';
import PostEditorFooter from '@/pages/post-editor/ui/PostEditorFooter.vue';
import MobileMainBlockUI from '@/shared/ui/block-ui/MobileMainBlockUI.vue';
import HeaderHorizontalPanelUI from '@/shared/ui/HeaderHorizontalPanelUI.vue';
import GoToPrevPage from '@/features/GoToPrevPage.vue';

const MobileNavigationStore = useMobileNavigationStore();
</script>

<template>
	<MobilePageUI>
		<HeaderHorizontalPanelUI>
			<HeaderWidget>
				<template #left-content>
					<GoToPrevPage>Создать пост</GoToPrevPage>
				</template>
			</HeaderWidget>
			<SidebarNavigationMobileWidget v-if="MobileNavigationStore.showNavigationPage" />
		</HeaderHorizontalPanelUI>

		<MobileMainBlockUI :class="$style.postEditor">
			<PostEditorHeader />
			<PostEditor />
			<PostEditorFooter />
		</MobileMainBlockUI>
	</MobilePageUI>
</template>

<style module>
.postEditor {
	padding: 28px 12px 0 12px;
	gap: 20px;
}
</style>
