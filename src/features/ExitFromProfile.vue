<template>
  <span :class="$style.text">Выйти</span>
</template>

<style module>
.text {
  font-size: 12px;
  line-height: 16px;
  color: var(--ui-secondary-color);
}
.text:hover {
  cursor: pointer;
  text-decoration: underline;
}
</style>