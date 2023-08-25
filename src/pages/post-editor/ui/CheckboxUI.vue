<script setup lang="ts">

</script>

<template>
	<div :class="$style.container">
		<input type="checkbox" />
		<span><slot/></span>
	</div>
</template>

<style module lang="scss">
.container {
	display: flex;
	justify-content: start;
	align-items: center;
	width: 100%;
	gap: 12px;
	font: var(--text);
	border: 1px solid ;
}
</style>
