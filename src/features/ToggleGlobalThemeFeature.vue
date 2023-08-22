<script setup lang="ts">
import { useThemeStore, ThemeModes } from '@/shared/stores/ThemeStore'
const { setThemeMode } = useThemeStore();
</script>

<template>
	<div :class="$style.container">
		<button @click="setThemeMode(ThemeModes.LIGHT)">Light</button>
		<button @click="setThemeMode(ThemeModes.DARK)">Dark</button>
	</div>
</template>

<style module>
.container {
	display: flex;
	gap: 10px;
}
</style>
