<template>
  <div :class="$style.container">
    <slot></slot>
  </div>
</template>

<style module>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: var(--ui-accent-color);
  border-radius: var(--border-radius-sub-base);
  font-size: 14px;
  line-height: 16px;
}
.container:hover {
  cursor: pointer;
  background-color: var(--ui-accent-2-color);
}
</style>