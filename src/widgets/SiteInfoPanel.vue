<template>
	<div :class="$style.container">
		<router-link to="404">Помощь и поддержка</router-link>
		<router-link to="404">О проекте</router-link>
		<router-link to="404">Новости проекта</router-link>
		<router-link to="404">Правила сообщества</router-link>
		<router-link to="404">Контакты</router-link>
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
	font: var(--font-small);
	border-radius: var(--style-radius-10);
	width: 100%;
	min-height: 240px;
	gap: 14px;
}
</style>
