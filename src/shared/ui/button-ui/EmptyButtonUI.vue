<script setup lang="ts"></script>

<template>
	<button :class="[$style.container, 'font-text']">
		<slot></slot>
	</button>
</template>

<style module>
.container {
	padding: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: var(--style-radius-5);
	color: var(--color-primary-1);
	border: 1px solid var(--color-primary-1);
	background-color: unset;
}

.container[disabled] {
	color: var(--color-gray-73);
	border-color: var(--color-gray-73);
	cursor: default;
}
</style>
