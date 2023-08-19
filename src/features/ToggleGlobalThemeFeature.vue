<script setup lang="ts">
import {useThemeStore} from "@/shared/stores/ThemeStore";
import FilledButtonUI from "@/shared/ui/button-ui/ButtonUI.vue";

const themeStore = useThemeStore();
</script>

<template>
  <div :class="$style.container">
		<FilledButtonUI v-on:click="themeStore.setWhite()">White Theme</FilledButtonUI>
		<FilledButtonUI v-on:click="themeStore.setDark()">Dark Theme</FilledButtonUI>
  </div>
</template>

<style module>
.container {
	display: flex;
	gap: 10px
}
</style>
