<script setup lang="ts">
import DesktopAsideColumnUI from '@/shared/ui/block-ui/columns/DesktopAsideColumnUI.vue';
import DesktopCentralColumnUI from '@/shared/ui/block-ui/columns/DesktopCentralColumnUI.vue';
import ButtonUI from '@/shared/ui/button-ui/ButtonUI.vue';
import EmptyButtonUI from '@/shared/ui/button-ui/EmptyButtonUI.vue';
import TextButtonUI from '@/shared/ui/button-ui/TextButtonUI.vue';
import DesktopPageUI from '@/shared/ui/page-ui/DesktopPageUI.vue';
import AdInfoPanelWidget from '@/widgets/AdBlockWidget.vue';
import ProfilePanelWidget from '@/widgets/profile-panel-widget/ProfilePanelWidget.vue';
import SiteNavigationPanelWidget from '@/widgets/site-navigation-widget/SiteNavigationPanelWidget.vue';
import SiteInfoPanel from '@/widgets/LinksBlockWidget.vue';
</script>

<template>
	<DesktopPageUI>
		<DesktopAsideColumnUI>
			<SiteNavigationPanelWidget />
		</DesktopAsideColumnUI>
		<DesktopCentralColumnUI>
			<div :class="$style.postPublished">
				<h3 :class="$style.title">Пост успешно опубликован!</h3>
				<span :class="$style.checkPost"> Он уже появился в Новом, хотите просмотреть?</span>
			</div>
			<section :class="$style.links">
				<ButtonUI :class="$style.link">Перейти в пост</ButtonUI>
				<EmptyButtonUI :class="$style.link">В Тренды</EmptyButtonUI>
				<TextButtonUI :class="$style.link">В мой профиль</TextButtonUI>
			</section>
		</DesktopCentralColumnUI>
		<DesktopAsideColumnUI>
			<ProfilePanelWidget />
			<SiteInfoPanel />
			<AdInfoPanelWidget />
		</DesktopAsideColumnUI>
	</DesktopPageUI>
</template>

<style module lang="scss">
.postPublished {
	padding: 32px;
	border-radius: 10px;
	gap: 32px;
	background: var(--color-gray-98);
	width: 100%;
	color: var(--color-gray-22);
	display: flex;
	flex-direction: column;
	gap: 32px;
	margin-bottom: 32px;
}

.title {
	font-size: 18px;
	font-weight: 700;
	line-height: 24px;
	letter-spacing: 0px;
	text-align: left;
}

.checkPost {
	font-size: 15px;
	font-weight: 400;
	line-height: 20px;
	letter-spacing: 0px;
	text-align: left;
}

.links {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	width: 100%;
	gap: 16px;
}

.link {
	font-weight: 700;
	font-size: 14px;
	line-height: 20px;
}
</style>
