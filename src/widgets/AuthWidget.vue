<script setup lang="ts"></script>

<template>
  <router-link to="/">
    <span :class="[$style.authText, 'font-text-small color-gray-22']">Войти</span>
  </router-link>
</template>

<style module>
.authText {
  letter-spacing: 0;
}
</style>
