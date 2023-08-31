<script setup lang="ts"></script>

<template>
	<aside :class="$style.sidebar">
		<slot />
	</aside>
</template>

<style module lang="scss">
.sidebar {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	min-width: 328px;
	gap: 32px;
}
</style>
