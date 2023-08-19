<script setup lang="ts">
import ToggleGlobalThemeFeature from "@/features/ToggleGlobalThemeFeature.vue";
import TogglePostActionsDirection from '@/features/TogglePostActionsDirection.vue';
import PageUI from "@/shared/ui/PageUI.vue";
</script>

<template>
  <PageUI>
    <ToggleGlobalThemeFeature/>
		<TogglePostActionsDirection/>
	</PageUI>
</template>

<style module>
</style>
