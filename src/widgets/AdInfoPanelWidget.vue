<template>
	<div :class="$style.container">
		<router-link to="/">Реклама / инструменты модератора</router-link>
	</div>
</template>

<style module>
.container {
	padding: 32px;
	display: flex;
	justify-content: start;
	align-items: start;
	flex-direction: column;
	background: var(--color-gray-98);
	color: var(--color-gray-22);
	font: var(--font-tags);
	border-radius: 10px;
	width: 100%;
	min-height: 240px;
	gap: 14px;
}
</style>
