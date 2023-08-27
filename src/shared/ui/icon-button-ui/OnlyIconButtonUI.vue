<template>
	<button :class="$style.container">
		<slot/>
	</button>
</template>

<style module lang="scss">
.container {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 32px;
	width: 32px;
	font: var(--font-small);
	color: var(--color-gray-98);
	background-color: var(--color-primary-1);
	border: 1px solid var(--color-gray-92);
	border-radius: var(--style-radius-16);
}
</style>
