<script setup lang="ts">
import type { Props } from './types'

const { attract } = defineProps<Props>()
</script>

<template>
	<div :class="{ [$style.container]: true, [$style.attract]: attract }">
		<slot></slot>
	</div>
</template>

<style module>
.container {
	padding: 1em;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 18px;
	border-radius: var(--style-radius-100);
	font: var(--font-small);
	color: var(--color-primary-1);
}
.attract {
	background-color: var(--color-primary-1);
	color: var(--color-contrast-primary-1);
}
</style>
