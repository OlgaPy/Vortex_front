<script setup lang="ts">
import ShareIcon from "@/shared/ui/icons/ShareIcon.vue";
import ButtonUI from "@/shared/ui/button-ui/ButtonUI.vue";
import {ButtonType} from "@/shared/ui/button-ui/types";
</script>

<template>
  <ButtonUI :type="ButtonType.TEXT">
    <ShareIcon/>
  </ButtonUI>
</template>

<style scoped>

</style>
