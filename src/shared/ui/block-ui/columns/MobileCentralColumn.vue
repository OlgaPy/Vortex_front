<script setup lang="ts"></script>

<template>
	<main :class="$style.container">
		<slot />
	</main>
</template>

<style module lang="scss">
.container {
	display: flex;
	justify-items: center;
	align-items: start;
	flex-direction: column;
	width: 100%;
	max-width: 786px;
}

@media screen and (max-width: $screen-md) {
	.container {
		padding: 12px;
	}
}

@media screen and (max-width: $screen-sm) {
	.container {
		padding: 0;
	}
}
</style>
