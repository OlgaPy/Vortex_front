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
</script>

<template>
	<DesktopPageUI>
		<aside :class="$style.sidebar">
			<SiteNavigationPanelWidget :class="$style.siteNavigationPanel"/>
		</aside>
		<main :class="$style.main">
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
	gap: 20px;
}

.siteNavigationPanel, .adInfoPanel,
.profilePanelWidget, .siteInfoPanel {
	margin-bottom: 32px;
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
