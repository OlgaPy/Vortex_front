<script setup lang="ts">
import TinyArrowIcon from '@/shared/assets/icons/TinyArrowIcon.svg';
import IconTextButtonUI from '@/shared/ui/icon-button-ui/IconTextButtonUI.vue';
import router from '@/app/providers/router';
</script>

<template>
	<IconTextButtonUI :class="$style.container" @click="router.go(-1)">
		<template #left-icon>
			<TinyArrowIcon :class="$style.icon" />
		</template>
		<template #text>
			<slot></slot>
		</template>
	</IconTextButtonUI>
</template>

<style module>
.container {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 14px;
	color: var(--color-gray-22);
	font: var(--font-title);
}
.icon {
	width: 10px;
	height: 20px;
	color: var(--color-primary-1);
}
</style>
