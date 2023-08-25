<script setup lang="ts">

</script>

<template>
	<button :class="$style.container">
		<span :class="$style.icon">
			<slot name="left-icon" :class="$style.icon"/>
		</span>
		<span>
			<slot name="text"/>
		</span>
		<span :class="$style.icon">
			<slot name="right-icon"/>
		</span>
	</button>
</template>

<style module lang="scss">
.container {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 8px;
	font: var(--small);
	color: var(--color-primary-1);
	background-color: var(--color-gray-98);
	border: 1px solid var(--color-gray-92);
	padding: 4px 8px;
	border-radius: var(--style-radius-5);
}

.icon > * {
	width: 8px;
	height: 8px;
}
</style>
