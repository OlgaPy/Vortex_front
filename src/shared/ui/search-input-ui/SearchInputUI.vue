<script setup lang="ts">
import SearchIcon from '@/shared/assets/icons/SearchIcon.svg';
import type {ISearchInputUI} from './types';

defineProps<ISearchInputUI>();
const emit = defineEmits(['update:modelValue']);

const onChangeInput = (event: Event) => {
	const target = event.target as HTMLInputElement;
	const value = target.value;

	emit('update:modelValue', value);
};
</script>

<template>
	<div :class="$style.container">
		<input :value="modelValue" @input="onChangeInput" :placeholder="placeholder" />
		<SearchIcon :class="$style.searchIcon" />
	</div>
</template>

<style module>
.container {
	padding: 8px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 5px;
	width: 100%;
	border-radius: var(--style-radius-5);
	border-width: 1.5px;
	border-style: solid;
	font: var(--font-text);
	border-color: var(--color-gray-95);
	background-color: var(--color-gray-95);
}

.container input {
	background-color: var(--color-gray-95);
	border: unset;
	outline: none;
	cursor: pointer;
	max-width: calc(100% - 25px);
}

.container input,
.container input::placeholder {
	color: var(--color-gray-53);
}

.searchIcon {
	width: 16px;
	height: 16px;
}

.searchIcon:hover {
	cursor: pointer;
}
</style>
