<script setup lang="ts">
import type {PreviewPostProps} from './types';

const {post, showProfile, showFooter} = withDefaults(
    defineProps<PreviewPostProps>(),
    { showFooter: true, showProfile: true }
);
</script>

<template>
	<main :class="[$style.container, 'color-bg-gray-98']">
		<header v-show="showProfile" :class="$style.header">
			<slot name="header"></slot>
		</header>

		<main :class="$style.main">
			<h1 class="font-title">{{ post.title }}</h1>
			<span class="font-smaller"><slot name="tags"></slot></span>
			<div :class="[$style.body, 'font-text']">

        <!-- TODO check render for different content types -->
        <div v-for="({ type, value }, index) in post.content" :key="index" :class="$style.contentWrapper">
          <div v-if="type === 'img'" :class="$style.mediaWrapper">
            <img :src="value" :class="$style.postImage" alt="Post Image" />
          </div>
          <div v-else :class="$style.content">
					<span>
						{{ value }}
					</span>
          </div>
        </div>

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

.contentWrapper,
.mediaWrapper {
	width: 100%;
}

.postProfile {
	display: flex;
	justify-content: start;
	align-items: center;
	gap: 8px;
	height: 36px;
	width: 100%;
	border: 1px solid var(--color-gray-22);
	color: var(--color-gray-22);
	font: var(--font-text);
}

.postImage {
	max-width: 100%;
	width: 100%;
}

.mediaWrapper {
	padding: 0;
}

.content {
	padding: 0 30px;
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

	.mediaWrapper,
	.content {
		padding: 0 12px;
	}
}
</style>
