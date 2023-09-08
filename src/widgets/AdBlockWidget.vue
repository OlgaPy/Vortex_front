<script setup lang="ts">
import UniformBlockUI from "@/shared/ui/block-ui/blocks/UniformBlockUI.vue";
</script>

<template>
  <UniformBlockUI :class="$style.container">
    <h1>Здесь будет реклама</h1>
  </UniformBlockUI>
</template>

<style module>
.container {
  font: var(--font-small);
	width: 100%;
	min-height: 240px;
	gap: 14px;
}
</style>