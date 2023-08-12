<script setup lang="ts">
import {TextSizes} from "@/shared/ui/text-ui/types";
import IconTextUI from "@/shared/ui/IconTextUI.vue";
import TextUI from "@/shared/ui/text-ui/TextUI.vue";
import CommentIcon from "@/shared/ui/icons/CommentIcon.vue";
</script>

<template>
  <router-link to="/all">
    <IconTextUI :class="$style.commentsLink">
      <template #left-icon><CommentIcon/></template>
      <template #text>
        <TextUI :size="TextSizes.SMALL">1516</TextUI>
      </template>
    </IconTextUI>
  </router-link>
</template>

<style module>
.commentsLink {
  width: 79px;
  gap: 4px;
}

</style>