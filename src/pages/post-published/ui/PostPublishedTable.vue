<script setup lang="ts">
import HeaderWidget from '@/widgets/HeaderWidget.vue';
import MobilePageUI from '@/shared/ui/page-ui/MobilePageUI.vue';
import HeaderHorizontalPanelUI from '@/shared/ui/block-ui/HorizontalPanelUI.vue';
import GoToPrevPage from '@/features/GoToPrevPage.vue';
import TextButtonUI from '@/shared/ui/button-ui/TextButtonUI.vue';
import ButtonUI from '@/shared/ui/button-ui/ButtonUI.vue';
import EmptyButtonUI from '@/shared/ui/button-ui/EmptyButtonUI.vue';
import AdInfoPanelWidget from '@/widgets/AdInfoPanelWidget.vue';
</script>

<template>
	<MobilePageUI>
		<HeaderHorizontalPanelUI>
			<HeaderWidget>
				<template #left-content>
					<GoToPrevPage>
						<h3 :class="$style.title">Пост успешно опубликован!</h3>
					</GoToPrevPage>
				</template>
			</HeaderWidget>
		</HeaderHorizontalPanelUI>
		<div :class="$style.content">
			<span :class="$style.checkPost"> Он уже появился в Новом, хотите просмотреть?</span>
			<section :class="$style.links">
				<ButtonUI :class="$style.link">Перейти в пост</ButtonUI>
				<EmptyButtonUI :class="$style.link">В Тренды</EmptyButtonUI>
				<TextButtonUI :class="$style.link">В мой профиль</TextButtonUI>
			</section>
			<div :class="$style.ads">
				<AdInfoPanelWidget />
				<AdInfoPanelWidget />
				<AdInfoPanelWidget />
			</div>
		</div>
	</MobilePageUI>
</template>

<style module>
.title {
	font-size: 17px;
	font-weight: 700;
}

.content {
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 32px;
}

.checkPost {
	color: var(--color-gray-22);
	font-size: 15px;
	font-weight: 400;
	line-height: 20px;
	letter-spacing: 0px;
	text-align: left;
	padding: 20px 24px;
	display: block;
}

.links {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	width: 100%;
	gap: 16px;
	padding: 0px 24px;
}

.link {
	font-weight: 700;
	font-size: 14px;
	line-height: 20px;
}

.ads {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	padding: 32px 24px;
	gap: 16px;
}
</style>
