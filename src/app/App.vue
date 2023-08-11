<script lang="ts" setup>
import {useThemeStore} from "@/shared";
const themeStore = useThemeStore();
</script>

<template>
  <div :class="$style.container" :data-theme="themeStore.theme">
    <RouterView/>
  </div>
</template>

<style lang="scss" module>
@use '~/app/themes/fonts';

.container {
  display: block;
  position: relative;
  height: 100%;
}
</style>
