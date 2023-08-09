<script setup>
const {count, attract} = defineProps({
  count: Number,
  attract: Boolean
});
</script>

<template>
  <div :class="{[$style.container]: true, [$style.attract]: attract}">
    {{count}}
  </div>
</template>

<style module>
.container {
  padding: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 18px;
  border-radius: 100px;
  font-size: 12px;
  letter-spacing: 0.5px;
  line-height: 16px;
  color: var(--ui-secondary-color);
}
.attract {
  background-color: var(--ui-accent-color);
  color: white;
}
</style>