<script setup lang="ts">
import SearchIcon from '@/shared/ui/icons/SearchIcon.vue'
import type { ISearchInputUI } from '@/shared/ui/search-input-ui/types'

defineProps<ISearchInputUI>()
const emit = defineEmits(['update:modelValue'])

const onChangeInput = (event: Event) => {
	const target = event.target as HTMLInputElement
	const value = target.value

	emit('update:modelValue', value)
}
</script>

<template>
	<div :class="$style.container">
		<input :value="modelValue" @input="onChangeInput" :placeholder="placeholder" />
		<SearchIcon :class="$style.searchIcon"/>
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
	max-width: 232px;
	border-radius: var(--style-radius-5);
	border-width: 1.5px;
	border-style: solid;
	font: var(--font-base);
	border-color: var(--color-gray-89);
	background-color: var(--color-gray-89);
}

.container input {
	background: inherit;
	border: unset;
	outline: none;
	cursor: pointer;
}

.container input,
.container input::placeholder {
	color: var(--color-gray-53);
}

.searchIcon:hover {
	cursor: pointer;
}
</style>
