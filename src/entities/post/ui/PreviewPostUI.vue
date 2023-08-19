<script setup lang="ts">
</script>

<template>
  <main :class="[$style.container, 'color-bg-gray-98']">
    <slot name="header"></slot>
    <div :class="$style.postPreview">
      <h1 class="font-h1"><slot name="title"></slot></h1>
      <span class="font-text-small"><slot name="tags"></slot></span>
      <span class="font-text-large"><slot name="body"></slot></span>
    </div>
    <slot name="footer"></slot>
  </main>
</template>

<style module>
.container {
  display: flex;
  justify-items: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 20px;
  padding: 20px 12px;
}

.postPreview {
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  gap: 12px;
}
</style>
