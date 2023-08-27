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
	background-color: unset;
	border-radius: var(--style-radius-16);
	border: 1px solid var(--color-primary-1);
}
</style>
