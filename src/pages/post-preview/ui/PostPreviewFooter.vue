<script setup lang="ts">
import ButtonUI from '@/shared/ui/button-ui/ButtonUI.vue';
import EmptyButtonUI from '@/shared/ui/button-ui/EmptyButtonUI.vue';
</script>

<template>
	<div :class="$style.container">
		<ButtonUI>Опубликовать</ButtonUI>
		<EmptyButtonUI>Предпросмотр</EmptyButtonUI>
	</div>
</template>

<style module lang="scss">
.container {
	display: flex;
	width: 100%;
	justify-content: space-between;
	gap: 20px;
	margin-top: 20px;
	padding: 32px 0;
}

.container > * {
	flex: 1;
}

@media screen and (max-width: $screen-xl) {
	.container {
		padding-top: 0;
	}
}

@media screen and (max-width: $screen-sm) {
	.container {
		flex-wrap: wrap;
	}

	.container > * {
		width: 100%;
		flex: auto;
	}
}
</style>
