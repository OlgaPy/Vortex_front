<template>
  <div :class="$style.container">
    <router-link to="/">Реклама / инструменты модератора</router-link>
  </div>
</template>

<style module>
.container {
  padding: 32px;
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  background: var(--ui-sub-main-color);
  border-radius: var(--border-radius-base);
  width: 300px;
  height: 241px;
}
.container > * {
  font-size: 14px;
  color: var(--ui-secondary-color);
}
</style>
