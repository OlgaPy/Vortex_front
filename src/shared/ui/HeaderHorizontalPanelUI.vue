<script setup lang="ts">

</script>

<template>
  <div :class="[$style.headerContainer, 'color-bg-gray-98']">
    <slot></slot>
  </div>
</template>

<style module>
.headerContainer {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
}
</style>
