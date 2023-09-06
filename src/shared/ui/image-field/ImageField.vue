<script setup lang="ts">
import {ref} from "vue";
import TrashIcon from "@/shared/assets/icons/TrashIcon.svg";
import ReloadIcon from "@/shared/assets/icons/ReloadIcon.svg";
import IconTextButtonUI from "@/shared/ui/icon-button-ui/IconTextButtonUI.vue";
import type {ImageFieldEmits} from "./types";

const emits = defineEmits<ImageFieldEmits>();

const fileInput = ref();
const previewImage = ref(null);

const uploadImage = (e: Event) => {
	const field = e.target as HTMLInputElement;
	const image = field.files[0];
	const reader = new FileReader();

	reader.readAsDataURL(image);
	reader.onload = e => {
		previewImage.value = e.target.result;
	};
}

const removeImage = () => {
  previewImage.value = null;
  emits('imageRemoved');
};
</script>

<template>
	<div :class="$style.container">
		<input type="file" accept="image/jpeg" @change=uploadImage ref="fileInput">
		<img v-show="previewImage" :src="previewImage" alt="Загруженное изображение" />
    <div :class="$style.actions">
      <IconTextButtonUI :class="$style.actionButton" @click="removeImage">
        <template #left-icon>
          <TrashIcon :class="$style.actionIcon"/>
        </template>
      </IconTextButtonUI>
      <IconTextButtonUI :class="$style.actionButton" @click="fileInput.click()">
        <template #left-icon>
          <ReloadIcon :class="$style.actionIcon"/>
        </template>
      </IconTextButtonUI>
    </div>
	</div>
</template>

<style module lang="scss">
.container {
  position: relative;
	display: flex;
	justify-content: center;
	width: 100%;
	max-width: 100%;
  height: 150px;
}
.container img {
	width: 100%;
	max-width: 100%;
}

.actions {
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 12px;
  z-index: 1;
}
.actionButton {
  padding: 8px;
  opacity: 0.6;
  background-color: var(--color-gray-89);
  border: var(--style-radius-10);
}
.actionButton:hover {
  opacity: 1;
}
.actionIcon {
  width: 16px;
  height: 16px;
  color: var(--color-primary-1);
}
</style>
