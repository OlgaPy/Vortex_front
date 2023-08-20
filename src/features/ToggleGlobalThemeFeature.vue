<script setup lang="ts">
import {useThemeStore, ThemeModes} from "@/shared/stores/ThemeStore";
import FilledButtonUI from "@/shared/ui/button-ui/ButtonUI.vue";

const {setThemeMode} = useThemeStore();
</script>

<template>
  <div :class="$style.container">
		<FilledButtonUI @click="setThemeMode(ThemeModes.AUTO)">Auto Theme</FilledButtonUI>
		<FilledButtonUI @click="setThemeMode(ThemeModes.LIGHT)">White Theme</FilledButtonUI>
		<FilledButtonUI @click="setThemeMode(ThemeModes.DARK)">Dark Theme</FilledButtonUI>
  </div>
</template>

<style module>
.container {
	display: flex;
	gap: 10px
}
</style>
