<script setup lang="ts">
import TextButtonUI from '@/shared/ui/button-ui/TextButtonUI.vue'
import ButtonUI from '@/shared/ui/button-ui/ButtonUI.vue'
import EmptyButtonUI from '@/shared/ui/button-ui/EmptyButtonUI.vue'
import PostEditorOptionsWidget from '@/widgets/PostEditorOptionsWidget.vue'
import PostEditorTagManagementWidget from '@/widgets/PostEditorTagManagementWidget.vue'
</script>

<template>
	<footer :class="$style.footer">
		<PostEditorTagManagementWidget />
		<PostEditorOptionsWidget />
		<section :class="$style.sectionSubmit">
			<ButtonUI>Опубликовать</ButtonUI>
			<EmptyButtonUI>Предпросмотр</EmptyButtonUI>
			<TextButtonUI>В черновик</TextButtonUI>
		</section>
	</footer>
</template>

<style module lang="scss">
.footer {
	display: flex;
	justify-content: center;
	align-items: start;
	flex-direction: column;
	width: 100%;
	gap: 20px;
}

.sectionSubmit {
	margin-top: 12px;
	display: flex;
	gap: 20px;
	justify-content: space-between;
	width: 100%;
}

.sectionSubmit > * {
	width: 30%;
}

@media screen and (max-width: $screen-sm) {
	.sectionSubmit {
		flex-wrap: wrap;
	}
	.sectionSubmit > * {
		width: 100%;
	}
}
</style>
