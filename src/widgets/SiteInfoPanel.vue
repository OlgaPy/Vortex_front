<template>
	<div :class="$style.container">
		<router-link to="/">Помощь и поддержка</router-link>
		<router-link to="/">О проекте</router-link>
		<router-link to="/">Новости проекта</router-link>
		<router-link to="/">Правила сообщества</router-link>
		<router-link to="/">Контакты</router-link>
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
	border-radius: var(--style-radius-10);
	width: 100%;
	min-height: 240px;
	gap: 14px;
}
</style>
