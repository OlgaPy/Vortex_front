<script setup lang="ts">
import type { Props } from './types';

const { size } = defineProps<Props>();
</script>

<template>
	<button :class="[$style.container, 'font-btn']" :data-size="size">
		<slot name="left-icon"></slot>
		<slot name="text"></slot>
		<slot name="right-icon"></slot>
	</button>
</template>

<style module>
.container {
	display: flex;
	flex-direction: row;
	align-items: center;
	border: 1px solid var(--color-gray-92);
	border-radius: var(--style-radius-5);
	color: var(--color-primary-1);
}

.container[data-size='small'] {
	gap: 8px;
	padding: 4px 8px;
	line-height: 20px;
}
</style>
