<script setup lang="ts">
import PlusIcon from '@/shared/assets/icons/PlusIcon.svg'
import CloseIcon from '@/shared/assets/icons/CloseIcon.svg'
import IconEmptyButtonUI from '@/shared/ui/icon-button-ui/IconEmptyButtonUI.vue'
import IconButtonUI from '@/shared/ui/icon-button-ui/IconButtonUI.vue'

const alreadyExistTags = [
	{ name: 'Котики' },
	{ name: 'Мой кот' },
	{ name: 'Пушистик' },
	{ name: 'Без рейтинга' }
]
</script>

<template>
	<section :class="$style.tagSection">
		<span class="font-text color-gray-22"> Добавьте к посту до 10 тегов </span>
		<div :class="$style.tagList">
			<!--	TODO активность, обводка			-->
			<IconEmptyButtonUI>
				<template #left-icon><PlusIcon :class="$style.smallIcon" /></template>
				<template #text>Тег</template>
			</IconEmptyButtonUI>
			<IconButtonUI v-for="(tag, index) in alreadyExistTags" :key="index">
				<template #left-icon><CloseIcon :class="$style.smallIcon" /></template>
				<template #text>{{ tag.name }}</template>
			</IconButtonUI>
		</div>
	</section>
</template>

<style module lang="scss">
.tagSection {
	display: flex;
	justify-content: center;
	align-items: start;
	flex-direction: column;
	width: 100%;
	gap: 8px;
	padding: 12px 0;
}
.tagList {
	display: flex;
	gap: 8px;
	flex-wrap: wrap;
}

.smallIcon {
	width: 8px;
	height: 8px;
}
</style>
