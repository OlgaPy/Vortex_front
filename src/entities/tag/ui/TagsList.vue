<script setup lang="ts">
const { tags } = defineProps<{ tags: String[] }>();
</script>

<template>
	<span :class="$style.container">
		<span class="color-gray-53 font-tags" v-for="(tag, index) in tags" :key="index">{{ tag }}</span>
	</span>
</template>

<style module>
.container {
	display: flex;
	justify-content: start;
	align-items: center;
	gap: 10px;
	width: 100%;
	font: var(--font-small);
}
</style>
