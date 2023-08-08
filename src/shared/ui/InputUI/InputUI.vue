<template>
  <div :class="$style.container">
    <slot></slot>
    <div :class="$style.actions">
      <img :class="$style.searchIcon" src="./icon-search.svg" alt="Лупа" />
    </div>
  </div>
</template>

<style module>
.container {
  display: flex;
  position: relative;
  padding: 8px 6px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
  border-radius: var(--border-radius-sub-base);
  background-color: var(--ui-main-color);
  line-height: 24px;
  font-size: 16px;
  color: var(--ui-secondary-color);
}

.actions {
  padding-right: 8px;
  position: absolute;
  display: flex;
  justify-content: start;
  align-items: center;
  right: 0;
  z-index: 1;
}
.actions > *:hover {
  cursor: pointer;
}

.searchIcon {
  height: 18px;
  width: 18px;
  fill: white;
}
</style>>