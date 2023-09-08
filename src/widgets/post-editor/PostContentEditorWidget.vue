<script setup lang="ts">
import type {IContentItem} from "@/entities/post";
import PlusIcon from '@/shared/assets/icons/PlusIcon.svg';
import IconButtonUI from '@/shared/ui/icon-button-ui/IconButtonUI.vue';
import ImageField from "@/shared/ui/image-field/ImageField.vue";
import TextareaUI from "@/shared/ui/input-ui/TextareaUI.vue";
import {img_value} from "@/widgets/post-editor/tmp_img";
import {ref} from "vue";

const content = ref<IContentItem[]>([]);

const setContent = (newContent: IContentItem[]) => {
  content.value = newContent;
}

const addBlock = (block: IContentItem) => {
  content.value.push(block);
}

const removeBlock = (index: number) => {
  content.value = content.value.filter((_, blockIndex) => blockIndex !== index);
};

const addVideo = () => {
  //TODO
  const block: IContentItem = {
    type: "video",
    value: null,
  };

  addBlock(block);
};
const addImage = () => {
  const block: IContentItem = {
    type: "img",
    value: null,
  };

  addBlock(block);
};
const addText = () => {
  const block: IContentItem = {
    type: "text",
    value: null,
  };

  addBlock(block);
};

const draft: IContentItem[] = [
  {
    type: "text",
    value: "This is draft-load demo",
  },
  {
    type: "img",
    value: img_value,
  },
];

setContent(draft);
</script>

<template>
	<main :class="$style.container">
		<section :class="$style.postContent">
      <template v-for="(block, index) in content" :key="index">
        <ImageField
            @image-removed="removeBlock(index)"
            v-if="block.type === 'img'"
            :src="block.value"
            open-immediately
        />
        <TextareaUI
            @remove-value="removeBlock(index)"
            :class="$style.textareaField"
            v-if="block.type === 'text'"
            v-model="block.value"
        />
      </template>
		</section>
		<section :class="$style.contentTypes">
			<IconButtonUI @click="addVideo">
				<template #left-icon><PlusIcon :class="$style.smallIcon" /></template>
				<template #text>Видео</template>
			</IconButtonUI>
			<IconButtonUI @click="addImage">
				<template #left-icon><PlusIcon :class="$style.smallIcon" /></template>
				<template #text>Изображение</template>
			</IconButtonUI>
			<IconButtonUI @click="addText">
				<template #left-icon><PlusIcon :class="$style.smallIcon" /></template>
				<template #text>Текст</template>
			</IconButtonUI>
		</section>
	</main>
</template>

<style module>
.container {
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: start;
	gap: 16px;
	width: 100%;
}

.postContent {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 20px;
	font: var(--font-text);
	width: 100%;
}

.postContent > * {
	width: 100%;
}

.textareaField {
	min-height: 150px;
}

.contentTypes {
	display: flex;
	gap: 16px;
}

.smallIcon {
	width: 8px;
	height: 8px;
}
</style>
