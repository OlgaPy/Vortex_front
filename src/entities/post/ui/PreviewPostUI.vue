<script setup lang="ts">
import { IPostPreview } from './types';

const { showProfile = true, showFooter = true } = defineProps<IPostPreview>();
</script>

<template>
	<main :class="[$style.container, 'color-bg-gray-98']">
		<header v-show="showProfile" :class="$style.header">
			<slot name="header"></slot>
		</header>
		<main :class="$style.main">
			<h1 class="font-title"><slot name="title"></slot></h1>
			<span class="font-smaller"><slot name="tags"></slot></span>
			<div :class="[$style.body, 'font-text']">
				<slot name="body"></slot>
			</div>
		</main>
		<footer v-show="showFooter" :class="$style.footer">
			<slot name="footer"></slot>
		</footer>
	</main>
</template>

<style module lang="scss">
.container {
	display: flex;
	justify-items: start;
	align-items: start;
	flex-direction: column;
	width: 100%;
	gap: 20px;
	padding: 20px 0;
}

.header {
	display: flex;
	justify-content: center;
	align-items: start;
	flex-direction: column;
	width: 100%;
}

.main {
	display: flex;
	justify-content: center;
	align-items: start;
	flex-direction: column;
	gap: 12px;
	color: var(--color-gray-14);
}

.body {
	display: flex;
	justify-content: center;
	align-items: start;
	flex-direction: column;
	gap: 10px;
}

.main > *,
.header,
.footer {
	padding: 0 12px;
}

.main .body {
	padding: 0;
}

.footer {
	display: flex;
	justify-content: center;
	align-items: start;
	flex-direction: column;
	width: 100%;
	border-top: 1px solid var(--color-base-bg);
	color: var(--color-gray-53);
}
.footer > * {
	padding: 16px 12px;
}

@media screen and (min-width: $screen-lg) {
	.container {
		border-radius: var(--style-radius-10);
		padding: 30px 0;
	}

	.main > *,
	.header,
	.footer {
		padding: 0 30px;
	}
}
</style>
