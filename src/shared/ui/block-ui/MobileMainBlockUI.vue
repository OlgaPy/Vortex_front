<script setup lang="ts"></script>

<template>
	<main :class="$style.container">
		<slot />
	</main>
</template>

<style module lang="scss">
.container {
	display: flex;
	justify-items: start;
	align-items: center;
	flex-direction: column;
	width: 100%;
	max-width: 786px;
}
</style>
