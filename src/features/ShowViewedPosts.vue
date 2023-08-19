<script setup lang="ts">
import ArrowIcon from "@/shared/ui/icons/ArrowIcon.vue";
import TextButtonUI from "@/shared/ui/button-ui/TextButtonUI.vue";
</script>

<template>
  <TextButtonUI :class="$style.container">
		<span class="font-text-large">158 постов прочитано</span>
    <ArrowIcon/>
	</TextButtonUI>
</template>

<style module>
.container {
  gap: 4px;
}
</style>
