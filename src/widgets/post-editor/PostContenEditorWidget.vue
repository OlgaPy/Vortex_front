<script setup lang="ts">
import IconButtonUI from '@/shared/ui/icon-button-ui/IconButtonUI.vue';
import PlusIcon from '@/shared/assets/icons/PlusIcon.svg';
import ImageField from "@/shared/ui/image-field/ImageField.vue";
import TextareaUI from "@/shared/ui/input-ui/TextareaUI.vue";
import {ref} from "vue";

const value = ref('');
</script>

<template>
	<main :class="$style.container">
		<section :class="$style.postContent">
			<ImageField/>
			<TextareaUI :class="$style.textareaField" v-model="value"/>
		</section>
		<section :class="$style.contentTypes">
			<IconButtonUI>
				<template #left-icon><PlusIcon :class="$style.smallIcon" /></template>
				<template #text>Видео</template>
			</IconButtonUI>
			<IconButtonUI>
				<template #left-icon><PlusIcon :class="$style.smallIcon" /></template>
				<template #text>Изображение</template>
			</IconButtonUI>
			<IconButtonUI>
				<template #left-icon><PlusIcon :class="$style.smallIcon" /></template>
				<template #text>Текст</template>
			</IconButtonUI>
		</section>
	</main>
</template>

<style module>
.container {
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: start;
	gap: 16px;
	width: 100%;
}

.postContent {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 20px;
	font: var(--font-text);
	width: 100%;
}

.postContent > * {
	width: 100%;
}

.textareaField {
	min-height: 150px;
}

.contentTypes {
	display: flex;
	gap: 16px;
}

.smallIcon {
	width: 8px;
	height: 8px;
}
</style>
