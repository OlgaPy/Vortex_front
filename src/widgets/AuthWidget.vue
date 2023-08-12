<script setup lang="ts">
import TextUI from "@/shared/ui/text-ui/TextUI.vue";
import {TextSizes} from "@/shared/ui/text-ui/types";
</script>

<template>
  <router-link to="/">
    <TextUI :class="$style.authText" :size="TextSizes.SMALL">Войти</TextUI>
  </router-link>
</template>

<style module>
.authText {
  letter-spacing: 0;
}
</style>