<script setup lang="ts"></script>

<template>
	<header :class="$style.container">
		<input placeholder="Заголовок" />
	</header>
</template>

<style module>
.container {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 8px 12px;
	border-radius: var(--style-radius-10);
	background-color: var(--color-gray-98);
	width: 100%;
}

.container > input {
	display: block;
	width: 100%;
	font: var(--font-text);
	color: var(--color-gray-53);
	background-color: var(--color-gray-98);
	border: unset;
	outline: none;
}
.container > input::placeholder {
	font: var(--font-text);
}
</style>
