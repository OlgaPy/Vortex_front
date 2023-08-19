<script setup lang="ts">
import SearchIcon from '@/shared/ui/icons/SearchIcon.vue';
import { ISearchInputUI } from '@/shared/ui/search-input-ui/types';

defineProps<ISearchInputUI>();
defineEmits(['update:modelValue']);
</script>

<template>
	<label :class="$style.container">
		<input
			:value="modelValue"
			@input="$emit('update:modelValue', $event.target.value)"
			:placeholder="placeholder"
		/>
		<SearchIcon/>
	</label>
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
		border-color: var(--color-icons-bg);
		background-color: var(--color-post-bg);
	}

	.container input {
		background: inherit;
		border: unset;
		outline: none;
	}

	.container input,
	.container input::placeholder {
		color: var(--color-tags);
	}
</style>
