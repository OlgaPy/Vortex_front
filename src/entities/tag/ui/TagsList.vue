<script setup lang="ts">
import TextUI from "@/shared/ui/text-ui/TextUI.vue";
import {TextSizes} from "@/shared/ui/text-ui/types";

const {tags} = defineProps<{tags: String[]}>();
</script>

<template>
  <TextUI :size="TextSizes.MICRO" :class="$style.container">
    <span v-for="(tag, index) in tags" :key="index">{{tag}}</span>
  </TextUI>
</template>

<style module>
.container {
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
  width: 100%;
  color: var(--ui-secondary-color);
}
</style>