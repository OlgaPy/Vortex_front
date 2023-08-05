<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import {useThemeStore} from "@/app/providers/stores/ThemeStore";

const themeStore = useThemeStore();
</script>

<template>
  <div :data-theme="themeStore.theme">
    <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/all">All UI Blocks</RouterLink>
      </nav>
    </header>

    <RouterView />
  </div>
</template>