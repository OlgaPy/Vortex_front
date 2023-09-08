<script setup lang="ts">
import CommentIcon from '@/shared/assets/icons/CommentIcon.svg';
import Icon from "@/shared/ui/icon/Icon.vue";
import {IconSizes} from "@/shared/ui/icon/types";
</script>

<template>
  <router-link to="/404" :class="$style.container">
    <Icon :size="IconSizes.TWENTY_FOUR">
      <CommentIcon/>
    </Icon>
    <span>1516</span>
  </router-link>
</template>

<style module>
.container {
  display: flex;
  justify-items: center;
  align-items: center;
  gap: 4px;
}
</style>
