<script setup lang="ts">
import {ref} from "vue";

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
</script>

<template>
	<div :class="$style.container">
		<input type="file" accept="image/jpeg" @change=uploadImage>
		<img v-show="previewImage" :src="previewImage" alt="Загруженное изображение" />
	</div>
</template>

<style module lang="scss">
.container {
	display: flex;
	justify-content: center;
	width: 100%;
	max-width: 100%;
}
.container img {
	width: 100%;
	max-width: 100%;
}
</style>
