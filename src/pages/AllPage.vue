<script setup lang="ts">
import ToggleGlobalThemeFeature from "@/features/ToggleGlobalThemeFeature.vue";
import TogglePostActionsDirection from '@/features/TogglePostActionsDirection.vue';
</script>

<template>
  <div :class="$style.page">
    <ToggleGlobalThemeFeature/>
		<TogglePostActionsDirection/>
  </div>
</template>

<style module>
.page {
  padding-top: 32px;
  display: flex;
	flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 32px;
  background: var(--ui-main-color);
  color: var(--ui-primary-color);
}
</style>
