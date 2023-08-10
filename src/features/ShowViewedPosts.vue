<script setup lang="ts">
import IconTextUI from "@/shared/ui/IconTextUI.vue";
import ArrowIcon from "@/shared/ui/icons/ArrowIcon.vue";
import TextUI from "@/shared/ui/text-ui/TextUI.vue";
import {TextSizes} from "@/shared/ui/text-ui/types";
</script>

<template>
  <IconTextUI :class="$style.container">
    <template #text>
      <TextUI :size=TextSizes.LARGE :class="$style.text">158 постов прочитано</TextUI>
    </template>
    <template #right-icon>
      <ArrowIcon/>
    </template>
  </IconTextUI>
</template>

<style module>
.container {
  padding: 4px 12px;
}
.text {
  color: var(--ui-accent-color);
}
</style>