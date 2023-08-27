<script setup lang="ts">
import IconButtonUI from "@/shared/ui/icon-button-ui/IconButtonUI.vue";
import PlusIcon from "@/shared/assets/icons/PlusIcon.svg";
</script>

<template>
	<main :class="$style.container">
		<section :class="$style.postContent">
			<span>SOME EDITOR</span>
		</section>
		<section :class="$style.contentTypes">
			<IconButtonUI>
				<template #left-icon><PlusIcon :class="$style.smallIcon"/></template>
				<template #text>Видео</template>
			</IconButtonUI>
			<IconButtonUI>
				<template #left-icon><PlusIcon :class="$style.smallIcon"/></template>
				<template #text>Изображение</template>
			</IconButtonUI>
			<IconButtonUI>
				<template #left-icon><PlusIcon :class="$style.smallIcon"/></template>
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
	font: var(--font-text);
	height: 200px;
	width: 100%;
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
