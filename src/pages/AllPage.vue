<script setup lang="ts">
import ToggleGlobalThemeFeature from "@/features/ToggleGlobalThemeFeature.vue";
</script>

<template>
  <div :class="$style.page">
    <ToggleGlobalThemeFeature/>
  </div>
</template>

<style module>
.page {
  padding-top: 32px;
  display: flex;
  justify-content: center;
  align-items: start;
  width: 100%;
  height: 100%;
  gap: 32px;
  background: var(--ui-main-color);
  color: var(--ui-primary-color);
}
</style>
