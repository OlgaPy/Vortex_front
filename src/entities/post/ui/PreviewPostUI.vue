<script setup lang="ts">
import type {PreviewPostProps} from './types';

const {post, showProfile, showFooter} = withDefaults(
	defineProps<PreviewPostProps>(),
	{showFooter: true, showProfile: true}
);
</script>

<template>
	<main :class="[$style.container, 'color-bg-gray-98']">
		<header v-show="showProfile" :class="$style.header">
			<slot name="header"></slot>
		</header>

		<main :class="$style.main">
			<div :class="$style.title">
				<h1 class="font-title">{{ post.title }}</h1>
				<span class="font-smaller"><slot name="tags"></slot></span>
			</div>

			<!-- TODO check render for different content types -->
			<div
				:class="[$style.content, 'font-text']"
				v-for="({ type, value }, index) in post.content"
				:key="index"
			>

				<div v-if="type === 'img'" :class="$style.imageItem">
					<img :src="value? value : ''" alt="Post Image"/>
				</div>
				<p v-else :class="$style.textItem">
					{{ value }}
				</p>

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
	gap: 16px;
	padding: 32px 0;
	border-radius: var(--style-radius-10);
}

.header {
	padding: 0 24px;
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
	gap: 16px;
	color: var(--color-gray-14);
}

.title {
	padding: 0 24px;
	display: flex;
	justify-content: center;
	align-items: start;
	flex-direction: column;
	gap: 12px;
}

.content {
	display: flex;
	justify-content: center;
	align-items: start;
	flex-direction: column;
	width: 100%;
	gap: 16px;
}

.imageItem {
	max-width: 100%;
	width: 100%;
}

.textItem {
	padding: 0 24px;
}

.footer {
	padding: 24px 24px 0 24px;
	display: flex;
	justify-content: center;
	align-items: start;
	flex-direction: column;
	width: 100%;
	border-top: 1px solid var(--color-base-bg);
	color: var(--color-gray-53);
}

@media screen and (max-width: $screen-sm) {
	.container {
		padding: 20px 0 0 0;
		border-radius: 0;
	}
	.main {
		gap: 12px;
	}
	.footer {
		padding: 16px 20px;
	}
}
</style>
