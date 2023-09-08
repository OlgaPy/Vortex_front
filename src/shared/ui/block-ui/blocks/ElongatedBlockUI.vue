<script setup lang="ts">

</script>

<template>
  <div :class="$style.container">
    <slot></slot>
  </div>
</template>

<style module lang="scss">
.container {
  padding: 32px 0;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  background-color: var(--color-gray-98);
  color: var(--color-gray-22);
  border-radius: var(--style-radius-10);
  width: 100%;
}
</style>