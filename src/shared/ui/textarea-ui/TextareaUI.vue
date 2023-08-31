<script setup lang="ts">
import type { Emits } from './types';
import TrashIcon from '@/shared/assets/icons/TrashIcon.svg';
import IconTextButtonUI from '@/shared/ui/icon-button-ui/IconTextButtonUI.vue';

defineEmits<Emits>();
</script>

<template>
	<div :class="[$style.container, 'color-gray-53', 'font-smaller']">
		<slot></slot>
		<IconTextButtonUI :class="$style.clearBtn" @click="$emit('remove')">
			<template #left-icon>
				<TrashIcon :class="$style.trashIcon" />
			</template>
		</IconTextButtonUI>
	</div>
</template>

<style module>
.container {
	position: relative;
	padding: 8px;
	display: flex;
	justify-content: stretch;
	align-items: start;
	border-radius: var(--style-radius-5);
	border: 1.5px solid var(--color-gray-53);
	background-color: var(--color-gray-98);
	gap: 10px;
}

.container textarea {
	font: var(--font-text);
	color: var(--color-gray-53);
	border: unset;
	background-color: inherit;
	outline: unset;
	width: 100%;
	height: 100%;
}

.clearBtn {
	position: absolute;
	top: 8px;
	right: 8px;
	width: 32px;
	height: 32px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: var(--style-radius-10);
	background-color: #e4e4e488;
	z-index: 1;
}

.trashIcon {
	width: 16px;
	height: 16px;
}
</style>
