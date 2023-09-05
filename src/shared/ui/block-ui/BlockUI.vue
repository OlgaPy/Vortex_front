<script setup lang="ts">

</script>

<template>
  <div :class="$style.container">
    <slot></slot>
  </div>
</template>

<style module lang="scss">
.container {
  padding: 32px;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  background-color: var(--color-gray-98);
  color: var(--color-gray-22);
  border-radius: var(--style-radius-10);
}
</style>
