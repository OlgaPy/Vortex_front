<script setup>
import {useThemeStore} from "@/shared";
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