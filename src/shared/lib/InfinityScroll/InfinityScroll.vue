<script setup lang="ts">
import { ref } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';
import type { IInfinityScrollProps } from './types';

const { getData, updateData } = defineProps<IInfinityScrollProps>();

const fetching = ref(false);
const loadingEnded = ref(false);
const loadingEl = ref<HTMLDivElement | null>(null);

useIntersectionObserver(loadingEl, async ([{ isIntersecting }]) => {
	if (fetching.value || !isIntersecting) {
		return;
	}

	fetching.value = true;
	const newData = await getData();

	if (!newData.length) {
		loadingEnded.value = true;
	}

	updateData(newData);
	fetching.value = false;
});
</script>

<template>
	<div :class="$style.container">
		<slot name="content" />
		<div :class="$style.loaderContainer">
			<div v-if="!loadingEnded" ref="loadingEl">
				<slot name="loader" />
			</div>
			<div v-else>
				<slot name="noData" />
			</div>
		</div>
	</div>
</template>

<style module>
.container {
	font: var(--font-text);
	padding: 10px 0;
}
.loaderContainer {
	padding: 10px;
	text-align: center;
	margin-top: 20px;
}
</style>
