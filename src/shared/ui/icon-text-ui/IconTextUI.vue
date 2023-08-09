<template>
  <div :class="$style.container">
    <div :class="$style.icon">
      <slot name="icon"></slot>
    </div>
    <span :class="$style.text">
      <slot name="text"></slot>
    </span>
  </div>
</template>

<style module>
.container {
  display: flex;
  justify-content: start;
  align-items: center;
}
.icon {
  display: flex;
  justify-content: center;
  margin-right: 8px;
}
.text {
  display: block;
}
</style>