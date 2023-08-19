<script setup lang="ts">
</script>

<template>
	<button :class="$style.container">
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
	letter-spacing: 0.5px;
	border-radius: var(--style-radius-5);
	border: unset;
	background: unset;
	gap: 4px;
}
</style>
