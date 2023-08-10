<template>
  <router-link :class="$style.container" to="/all">
    <img src="./icons/userpic.svg" alt="Аватар">
    <div :class="$style.info">
      <span :class="$style.nickname">Username</span>
      <slot :class="$style.action" name="action"></slot>
    </div>
  </router-link>
</template>

<style module>
.container {
  display: flex;
  justify-self: start;
  align-items: start;
  height: 48px;
}
.info {
  margin-left: 16px;
  display: flex;
  justify-content: stretch;
  align-items: start;
  flex-direction: column;
  height: 48px;
}
.nickname {
  font-weight: bold;
  color: var(--ui-primary-color);
}
</style>