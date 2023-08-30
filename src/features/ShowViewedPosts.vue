<script setup lang="ts">
import ArrowIcon from '@/shared/assets/icons/ArrowIcon.svg';
import IconTextButtonUI from '@/shared/ui/icon-button-ui/IconTextButtonUI.vue';
</script>

<template>
	<IconTextButtonUI>
		<template #text><span class="font-text">158 постов прочитано</span></template>
		<template #right-icon><ArrowIcon :class="$style.arrowIcon" /></template>
	</IconTextButtonUI>
</template>

<style module lang="scss">
.arrowIcon {
	width: 10px;
	height: 6px;
}
</style>
