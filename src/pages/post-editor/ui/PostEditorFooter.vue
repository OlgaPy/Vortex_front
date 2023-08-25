<script setup lang="ts">
import TextButtonUI from "@/shared/ui/button-ui/TextButtonUI.vue";
import IconCheckboxUI from "@/pages/post-editor/ui/IconButtonUI.vue";
import CheckboxUI from "@/shared/ui/checkbox-ui/CheckboxUI.vue";
import ButtonUI from "@/shared/ui/button-ui/ButtonUI.vue";
import EmptyButtonUI from "@/shared/ui/button-ui/EmptyButtonUI.vue";
import PlusIcon from '@/shared/ui/icons/PlusIcon.svg';
import CloseIcon from '@/shared/ui/icons/CloseIcon.svg';
import SelectUI from "@/shared/ui/select-ui/SelectUI.vue";

const alreadyExistTags = [
	{ name: 'Котики', },
	{ name: 'Мой кот', },
	{ name: 'Пушистик', },
	{ name: 'Без рейтинга', },
];
</script>

<template>
	<footer :class="$style.footer">
		<section :class="$style.tagSection">
			<span class="font-text color-gray-22">
				Добавьте к посту до 10 тегов
			</span>
			<div :class="$style.tagList">
				<!--	TODO активность, обводка			-->
				<IconCheckboxUI>
					<template #left-icon><PlusIcon/></template>
					<template #text>Тег</template>
				</IconCheckboxUI>
				<IconCheckboxUI v-for="(tag, index) in alreadyExistTags" :key="index">
					<template #left-icon><CloseIcon/></template>
					<template #text>{{ tag.name }}</template>
				</IconCheckboxUI>
			</div>
		</section>
		<section :class="$style.sectionAdditional">
			<CheckboxUI :model-value="false">Авторский контент</CheckboxUI>
			<CheckboxUI :model-value="true" >Опубликовать пост в группе</CheckboxUI>
			<SelectUI :class="$style.chooseGroup"/>
		</section>
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

.tagSection {
	display: flex;
	justify-content: center;
	align-items: start;
	flex-direction: column;
	width: 100%;
	gap: 8px;
	padding: 12px 0;
}
.tagList {
	display: flex;
	gap: 8px;
	flex-wrap: wrap;
}

.sectionAdditional {
	display: flex;
	justify-content: center;
	align-items: start;
	flex-direction: column;
	width: 100%;
	gap: 20px;
	padding: 12px 8px;
	border-radius: var(--style-radius-10);
	background-color: var(--color-gray-98);
}
.chooseGroup {
	width: 245px;
}

.sectionSubmit {
	margin-top: 32px;
	display: flex;
	gap: 20px;
}
.sectionSubmit > * {
	width: 220px;
}
</style>
