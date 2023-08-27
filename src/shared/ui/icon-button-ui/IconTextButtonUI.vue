<script setup lang="ts"></script>

<template>
	<button :class="[$style.container, 'font-text']">
		<slot name="left-icon"></slot>
		<slot name="text"></slot>
		<slot name="right-icon"></slot>
	</button>
</template>

<style module>
.container {
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: var(--style-radius-5);
	gap: 4px;
	color: var(--color-primary-1);
	border: unset;
	background: unset;
}

.container[disabled] {
	color: var(--color-gray-73);
	cursor: default;
}
</style>
