<script setup lang="ts">
import ArrowIcon from "@/shared/ui/icons/ArrowIcon.vue";
import TextUI from "@/shared/ui/text-ui/TextUI.vue";
import {TextSizes} from "@/shared/ui/text-ui/types";
import ButtonUI from "@/shared/ui/button-ui/ButtonUI.vue";
import {ButtonActivity, ButtonType} from "@/shared/ui/button-ui/types";
</script>

<template>
  <ButtonUI :activity="ButtonActivity.ACTIVE" :type="ButtonType.TEXT" :class="$style.container">
    <TextUI :size="TextSizes.LARGE">158 постов прочитано</TextUI>
    <ArrowIcon/>
  </ButtonUI>
</template>

<style module>
.container {
  gap: 4px;
}
</style>
