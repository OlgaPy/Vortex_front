<template>
	<button :class="$style.container">
		<slot name="left-icon" />
		<span :class="$style.text">
			<slot name="text" />
		</span>
		<slot name="right-icon" />
	</button>
</template>

<style module lang="scss">
.container {
	padding: 4px 8px;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 8px;
	font: var(--font-small);
	color: var(--color-primary-1);
	background-color: var(--color-gray-98);
	border: 1px solid var(--color-gray-92);
	border-radius: var(--style-radius-5);
}
</style>
