<script setup lang="ts"></script>

<template>
	<main :class="$style.main">
		<slot />
	</main>
</template>

<style module lang="scss">
.main {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 700px;
  gap: 32px;
}
</style>
