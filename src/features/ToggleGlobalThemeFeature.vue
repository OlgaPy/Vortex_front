<script setup lang="ts">
import {useThemeStore} from "@/shared";

const themeStore = useThemeStore();
</script>

<template>
  <div style="display: flex">
    <button v-on:click="themeStore.setWhite()">White Theme</button>
    <button v-on:click="themeStore.setDark()">Dark Theme</button>
  </div>
</template>