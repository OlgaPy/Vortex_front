<script setup lang="ts">
const items = [
	{ name: 'Тренды', path: '/' },
	{ name: 'Новое', path: '/all' },
	{ name: 'Топ', path: '/all' },
	{ name: 'Обсуждаемое', path: '/all' },
	{ name: 'Подписки', path: '/all' },
	{ name: 'Группы', path: '/all' }
]
</script>

<template>
	<div :class="$style.container">
		<router-link
			v-for="(item, index) in items"
			:key="index"
			:class="$style.button"
			:active-class="$style.activeItem"
			:to="item.path"
		>
			<span>{{ item.name }}</span>
		</router-link>
	</div>
</template>

<style module>
.container {
	display: flex;
	justify-items: start;
	align-items: center;
	gap: 16px;
	width: 100%;
	overflow-x: auto;
	padding: 0 24px;
	box-shadow: 0 1px 3px 0 var(--color-black-0-30);
	color: var(--color-gray-22);
	font: var(--font-text-medium);
}
.container::-webkit-scrollbar {
	display: none;
}

.container a {
	cursor: pointer;
}

.button {
	padding: 16px 4px;
}

.activeItem {
	font: var(--font-btn-medium);
}

.container .activeItem {
	cursor: default;
}
</style>
