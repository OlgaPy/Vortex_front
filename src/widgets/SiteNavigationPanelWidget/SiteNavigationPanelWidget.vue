<script setup>
import {InputUI} from "@/shared/ui/InputUI";

console.log(window.location.pathname);
</script>

<template>
  <div :class="$style.container">
    <section :class="`${$style.section} ${$style.logoSection}`">
      <img src="./logo.svg" alt="Капибара лого">
    </section>
    <section :class="`${$style.section} ${$style.menuSection}`">
      <router-link to="/">Тренды</router-link>
      <router-link to="/">Новое</router-link>
      <router-link to="/">Топ</router-link>
      <router-link to="/">Обсуждаемое</router-link>
      <router-link to="/">Подписки</router-link>
      <router-link to="/">Группы</router-link>
    </section>
    <section :class="`${$style.section} ${$style.searchSection}`">
      <InputUI>
        <input placeholder="Найти пост..." />
      </InputUI>
    </section>
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
  width: 300px;
  height: 450px;
}
.section {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
}
.logoSection {
  width: 236px;
  height: 54px;
}
.menuSection {
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  gap: 16px;
  width: 236px;
}
.searchSection {
  width: 236px;
  height: 40px;
}
</style>>