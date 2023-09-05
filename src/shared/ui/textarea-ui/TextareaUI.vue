<script setup lang="ts">
import type { Emits } from './types';
import TrashIcon from '@/shared/assets/icons/TrashIcon.svg';
import IconTextButtonUI from '@/shared/ui/icon-button-ui/IconTextButtonUI.vue';

defineEmits<Emits>();

const onInput = (e: Event) => {
	const field = e.target as HTMLDivElement;

	if (field) {
		field.style.height = 'auto';
		field.style.height = `${field.scrollHeight}px`;
	}
}
</script>

<template>
	<div :class="[$style.container, 'color-gray-53', 'font-smaller']">
		<textarea @input="onInput"/>
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
	background-color: var(--color-gray-98);
	gap: 10px;
}

.container textarea {
	box-sizing: border-box;
	font: var(--font-text);
	color: var(--color-gray-53);
	border: unset;
	background-color: var(--color-gray-98);
	outline: unset;
	overflow-y: hidden;
	resize: none;
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
