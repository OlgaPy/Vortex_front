<script setup lang="ts">
import IconTextUI from "@/shared/ui/IconTextUI.vue";
import CommentIcon from "@/shared/ui/icons/CommentIcon.vue";
</script>

<template>
  <router-link to="/all" :class="'link'">
    <IconTextUI :class="$style.commentsLink">
      <template #left-icon><CommentIcon/></template>
      <template #text>
        <span class="font-text-small">1516</span>
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
