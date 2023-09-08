<script setup lang="ts">
import {FeedTypes} from "@/entities/posts-feed/config/feed-types";

const items = [
	{ name: 'Тренды', path: FeedTypes.TRENDS },
	{ name: 'Новое', path: FeedTypes.NEW },
	{ name: 'Топ', path: FeedTypes.TOP },
	{ name: 'Обсуждаемое', path: FeedTypes.SUBSCRIPTIONS },
	{ name: 'Подписки', path: '404' },
	{ name: 'Группы', path: '404' }
];
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
	font: var(--font-sub-title);
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
	font-weight: bold;
}

.container .activeItem {
	cursor: default;
}
</style>
