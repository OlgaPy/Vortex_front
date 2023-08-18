<script setup lang="ts">
import {useThemeStore} from "@/shared/stores/ThemeStore";

const themeStore = useThemeStore();
</script>

<template>
  <div style="display: flex; gap: 10px">
    <button v-on:click="themeStore.setWhite()">White Theme</button>
    <button v-on:click="themeStore.setDark()">Dark Theme</button>
  </div>
</template>
