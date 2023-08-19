<script setup lang="ts">
import SaveIcon from "@/shared/ui/icons/SaveIcon.vue";
import ButtonUI from "@/shared/ui/button-ui/ButtonUI.vue";
import {ButtonType} from "@/shared/ui/button-ui/types";
</script>

<template>
  <ButtonUI :type="ButtonType.TEXT">
    <SaveIcon/>
  </ButtonUI>
</template>

<style scoped>

</style>
