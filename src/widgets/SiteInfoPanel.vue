<script setup></script>

<template>
  <div :class="$style.container">
    <router-link to="/">Помощь и поддержка</router-link>
    <router-link to="/">О проекте</router-link>
    <router-link to="/">Новости проекта</router-link>
    <router-link to="/">Правила сообщества</router-link>
    <router-link to="/">Контакты</router-link>
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
  border-radius: 10px;
  width: 100%;
  min-height: 241px;
  gap: 14px;
}
.container > * {
  font-size: 14px;
  color: var(--ui-secondary-color);
}
</style>