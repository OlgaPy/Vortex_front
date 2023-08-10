<script setup lang="ts">
import {useThemeStore} from "@/shared/stores/ThemeStore";

const themeStore = useThemeStore();
</script>

<template>
  <div :class="$style.container" :data-theme="themeStore.theme">
    <RouterView/>
  </div>
</template>

<style module>
.container {
  display: block;
  position: relative;
  height: 100%;
}
</style>