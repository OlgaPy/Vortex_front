<script setup lang="ts">
import {useThemeStore} from "@/shared/stores/ThemeStore";
const themeStore = useThemeStore();
</script>

<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn color="white" text-color="black" label="White Theme" @click="themeStore.setWhite" />
    <q-btn color="black" label="Black Theme" @click="themeStore.setDark"/>
  </div>
</template>