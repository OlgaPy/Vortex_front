<script setup lang="ts">
import HeaderWidget from '@/widgets/HeaderWidget.vue';
import MobilePageUI from '@/shared/ui/page-ui/MobilePageUI.vue';
import { useMobileNavigationStore } from '@/shared/stores/MobileNavigationStore';
import SidebarNavigationMobileWidget from '@/widgets/SidebarNavigationMobileWidget.vue';
import HeaderHorizontalPanelUI from '@/shared/ui/HeaderHorizontalPanelUI.vue';
import TextButtonUI from '@/shared/ui/button-ui/TextButtonUI.vue';
import ButtonUI from '@/shared/ui/button-ui/ButtonUI.vue';
import EmptyButtonUI from '@/shared/ui/button-ui/EmptyButtonUI.vue';

const MobileNavigationStore = useMobileNavigationStore();
</script>

<template>
	<MobilePageUI>
		<HeaderHorizontalPanelUI>
			<HeaderWidget />
		</HeaderHorizontalPanelUI>
		<SidebarNavigationMobileWidget v-if="MobileNavigationStore.showNavigationPage" />
		<div :class="$style.content">
			<h3 :class="$style.title">Пост успешно опубликован!</h3>
			<span :class="$style.checkPost"> Он уже появился в Новом, хотите просмотреть?</span>
			<section :class="$style.links">
				<ButtonUI :class="$style.link">Перейти в пост</ButtonUI>
				<EmptyButtonUI :class="$style.link">В Тренды</EmptyButtonUI>
				<TextButtonUI :class="$style.link">В мой профиль</TextButtonUI>
			</section>
		</div>
	</MobilePageUI>
</template>

<style module>
.content {
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 20px;
	padding: 20px 0px;
}

.title {
	padding: 4px 12px;
	font-size: 17px;
	font-weight: 700;
	line-height: 24px;
	font-family: var(--font-family-default);
	color: var(--color-gray-22);
}

.checkPost {
	color: var(--color-gray-22);
	font-size: 15px;
	font-weight: 400;
	line-height: 20px;
	padding: 12px;
}

.links {
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 20px;
	padding: 0px 12px;
}

.link {
	font-weight: 700;
	font-size: 14px;
	line-height: 20px;
}
</style>
