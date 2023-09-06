<script setup lang="ts">
import CheckIcon from '@/shared/assets/icons/CheckIcon.svg';
import type {Emits, Props} from './types';

const { modelValue } = defineProps<Props>();
const emit = defineEmits<Emits>();
</script>

<template>
	<div :class="$style.container" @click.prevent="() => emit('update:modelValue', !modelValue)">
		<input type="checkbox" :checked="modelValue" :class="$style.hidden" />
		<div :class="$style.view">
			<div :class="$style.icon">
				<CheckIcon v-if="modelValue" />
			</div>
			<slot></slot>
		</div>
	</div>
</template>

<style module>
.container {
	display: flex;
	width: 100%;
	height: 22px;
	font: var(--font-sub-title);
	color: var(--color-gray-53);
	cursor: pointer;
}

.view {
	display: flex;
	justify-content: start;
	align-items: center;
	width: 100%;
	height: 100%;
	gap: 12px;
}

.icon {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 22px;
	height: 22px;
	border: 2px solid var(--color-gray-53);
	border-radius: var(--style-radius-5);
}
.icon > svg {
	width: 18px;
	height: 18px;
}

.hidden {
	width: 0;
	height: 0;
	margin: 0;
	appearance: none;
}
</style>
