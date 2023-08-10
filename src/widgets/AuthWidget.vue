<script setup lang="ts">
import TextUI from "@/shared/ui/text-ui/TextUI.vue";
</script>

<template>
  <router-link to="/">
    <TextUI :class="$style.authText" size="small">Войти</TextUI>
  </router-link>
</template>

<style module>
.authText {
  letter-spacing: 0;
}
</style>