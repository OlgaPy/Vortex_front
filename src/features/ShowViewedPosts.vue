<script setup lang="ts">
import ArrowIcon from "@/shared/ui/icons/ArrowIcon.vue";
import ButtonUI from "@/shared/ui/button-ui/ButtonUI.vue";
import {ButtonActivity, ButtonType} from "@/shared/ui/button-ui/types";
</script>

<template>
  <ButtonUI :activity="ButtonActivity.ACTIVE" :type="ButtonType.TEXT" :class="$style.container">
		<span class="font-text-large">158 постов прочитано</span>
    <ArrowIcon/>
  </ButtonUI>
</template>

<style module>
.container {
  gap: 4px;
}
</style>
