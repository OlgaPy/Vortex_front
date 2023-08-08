<script setup lang="ts">
import ToggleGlobalTheme from "@/features/ToggleGlobalThemeFeature.vue";
</script>

<template>
  <div class="page">
    <ToggleGlobalTheme/>
  </div>
</template>

<style lang="scss" scoped>
.page {
  padding-top: 32px;
  display: flex;
  justify-content: center;
  align-items: start;
  width: 100%;
  height: 100%;
  gap: 32px;
  background: var(--ui-bg-color);
  color: var(--ui-primary-color);
}
</style>