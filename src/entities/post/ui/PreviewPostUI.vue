<script setup lang="ts">
import TextUI from "@/shared/ui/text-ui/TextUI.vue";
import {TextSizes} from "@/shared/ui/text-ui/types";
import {TitleSizes} from "@/shared/ui/title-ui/types";
import TitleUI from "@/shared/ui/title-ui/TitleUI.vue";
</script>

<template>
  <main :class="$style.container">
    <slot name="header"></slot>
    <div :class="$style.postPreview">
      <TitleUI :size="TitleSizes.LARGE"><slot name="title"></slot></TitleUI>
      <TextUI :size="TextSizes.SMALL"><slot name="tags"></slot></TextUI>
      <TextUI :size="TextSizes.LARGE"><slot name="body"></slot></TextUI>
    </div>
    <slot name="footer"></slot>
  </main>
</template>

<style module>
.container {
  display: flex;
  justify-items: center;
  align-items: start;
  flex-direction: column;
  width: 100%;
  gap: 20px;
  padding: 20px 12px;
  background-color: var(--ui-sub-main-color);
}

.postPreview {
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  gap: 12px;
}
</style>