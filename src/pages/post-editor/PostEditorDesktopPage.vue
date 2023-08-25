<script setup lang="ts">
import SiteNavigationPanelWidget from "@/widgets/site-navigation-widget/SiteNavigationPanelWidget.vue";
import AdInfoPanelWidget from "@/widgets/AdInfoPanelWidget.vue";
import ProfilePanelWidget from "@/widgets/profile-panel-widget/ProfilePanelWidget.vue";
import SiteInfoPanel from "@/widgets/SiteInfoPanel.vue";
import DesktopPageUI from "@/shared/ui/page-ui/DesktopPageUI.vue";
import IconCheckboxUI from "./ui/IconButtonUI.vue";
import InputUI from "./ui/InputUI.vue";
import PostEditorFooter from "@/pages/post-editor/ui/PostEditorFooter.vue";
import PlusIcon from "@/shared/ui/icons/PlusIcon.svg";
import DesktopAsideBlockUI from "@/shared/ui/aside-block-ui/DesktopAsideBlockUI.vue";
import DesktopMainBlockUI from "@/shared/ui/main-block-ui/DesktopMainBlockUI.vue";
</script>

<template>
	<DesktopPageUI>
		<DesktopAsideBlockUI>
			<SiteNavigationPanelWidget :class="$style.siteNavigationPanel"/>
		</DesktopAsideBlockUI>
		<DesktopMainBlockUI :class="$style.main">
			<header :class="$style.postTitle">
				<InputUI>
					<input placeholder="Заголовок">
				</InputUI>
			</header>
			<main :class="$style.postEditor">
				<section :class="$style.postContent">
					SOME EDITOR
				</section>
				<section :class="$style.contentTypes">
					<IconCheckboxUI>
						<template #left-icon><PlusIcon/></template>
						<template #text>Видео</template>
					</IconCheckboxUI>
					<IconCheckboxUI>
						<template #left-icon><PlusIcon/></template>
						<template #text>Изображение</template>
					</IconCheckboxUI>
					<IconCheckboxUI>
						<template #left-icon><PlusIcon/></template>
						<template #text>Текст</template>
					</IconCheckboxUI>
				</section>
			</main>
			<PostEditorFooter/>
		</DesktopMainBlockUI>
		<DesktopAsideBlockUI>
			<ProfilePanelWidget :class="$style.profilePanelWidget"/>
			<SiteInfoPanel :class="$style.siteInfoPanel"/>
			<AdInfoPanelWidget :class="$style.adInfoPanel"/>
		</DesktopAsideBlockUI>>
	</DesktopPageUI>
</template>

<style module>
.main {
	gap: 20px;
}

.postEditor {
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: start;
	gap: 12px;
	width: 100%;
}

.contentTypes {
	display: flex;
	gap: 16px;
}
</style>
