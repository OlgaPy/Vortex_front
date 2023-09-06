<script setup lang="ts">
import {onMounted, ref} from "vue";
import TrashIcon from "@/shared/assets/icons/TrashIcon.svg";
import ReloadIcon from "@/shared/assets/icons/ReloadIcon.svg";
import IconTextButtonUI from "@/shared/ui/icon-button-ui/IconTextButtonUI.vue";
import ButtonUI from "@/shared/ui/button-ui/ButtonUI.vue";
import type {ImageFieldEmits, ImageFieldProps} from "@/shared/ui/image-field/types";

const emits = defineEmits<ImageFieldEmits>();
const props = defineProps<ImageFieldProps>();

const fileInput = ref();
const previewImage = ref(props.src || undefined);

const uploadImage = (e: Event) => {
  //TODO Fuck HTML Types
  const field = e.target as HTMLInputElement;

  if (!field.files) {
    return;
  }

	const image = field.files[0];
	const reader = new FileReader();

	reader.readAsDataURL(image);
	reader.onload = () => {
		previewImage.value = reader.result;
	};
}

const removeImage = () => {
  previewImage.value = undefined;
  emits('imageRemoved');
};

onMounted(() => {
  if (props.openImmediately && !previewImage.value) {
    fileInput.value.click();
  }
});
</script>

<template>
	<div :class="$style.container" v-show="!(props.openImmediately && !previewImage)">
		<input :class="$style.input" type="file" accept="image/jpeg" @change=uploadImage ref="fileInput">
		<img v-if="previewImage" :src="previewImage" alt="Загруженное изображение" />
    <ButtonUI
        :class="$style.loadImageButton"
        v-if="!previewImage"
        @click="fileInput.click()"
    >
      Загрузить изображение
    </ButtonUI>
    <div :class="$style.actions">
      <IconTextButtonUI :class="$style.actionButton" @click="removeImage">
        <template #left-icon>
          <TrashIcon :class="$style.actionIcon"/>
        </template>
      </IconTextButtonUI>
      <IconTextButtonUI :class="$style.actionButton" @click="fileInput.click()" v-show="previewImage">
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
  border-radius: var(--style-radius-5);
  background-color: var(--color-gray-98);
}

.input {
  display: none;
}

.container img {
	width: 100%;
	max-width: 100%;
}

.loadImageButton {
  margin: 16px;
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
  border-radius: var(--style-radius-10);
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
