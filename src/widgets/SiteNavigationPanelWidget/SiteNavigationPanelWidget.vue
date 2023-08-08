<script setup>
import {InputUI} from "@/shared/ui/InputUI";
</script>

<template>
  <div :class="$style.container">
    <section :class="`${$style.section} ${$style.logoSection}`">
      <img src="./logo.svg" alt="Капибара лого">
    </section>
    <section :class="`${$style.section} ${$style.menuSection}`">
      <router-link to="/" :active-class="$style.activeClass">Тренды</router-link>
      <router-link to="/all" :active-class="$style.activeClass">Новое</router-link>
      <router-link to="/all" :active-class="$style.activeClass">ТОП</router-link>
      <router-link to="/all" :active-class="$style.activeClass">Обсуждаемое</router-link>
      <router-link to="/all" :active-class="$style.activeClass">Подписки</router-link>
      <router-link to="/all" :active-class="$style.activeClass">Группы</router-link>
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
  width: 100%;
  height: 54px;
}
.menuSection {
  position: relative;
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}
.activeClass {
  position: relative;
  font-weight: bold;
  z-index: 1;
}
.activeClass::after {
  content: "";
  position: absolute;
  top: -0.5rem;
  left: -16px;
  height: 40px;
  width: 284px;
  background: var(--ui-main-color);
  border-radius: var(--border-radius-sub-base) 0 0 var(--border-radius-sub-base);
  z-index: -1;
}
.searchSection {
  width: 236px;
  height: 40px;
}
</style>>