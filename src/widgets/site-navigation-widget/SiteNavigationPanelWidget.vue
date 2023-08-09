<script setup>
import SearchInputUI from "@/shared/ui/search-input-ui/SearchInputUI.vue";
import {ThemesList, useThemeStore} from "@/shared/stores/ThemeStore";
const {theme} = useThemeStore();
</script>

<template>
  <div :class="$style.container">
    <section :class="`${$style.section} ${$style.logoSection}`">
      <img v-if="theme === ThemesList.WHITE" src="./img/dark-color-logo.svg" alt="Капибара лого" />
      <img v-if="theme === ThemesList.DARK" src="./img/white-color-logo.svg" alt="Капибара лого" />
    </section>
    <section :class="`${$style.section} ${$style.menuSection}`">
      <router-link to="/" :active-class="$style.activeLink">Тренды</router-link>
      <router-link to="/all" :active-class="$style.activeLink">Новое</router-link>
      <router-link to="/all" :active-class="$style.activeLink">ТОП</router-link>
      <router-link to="/all" :active-class="$style.activeLink">Обсуждаемое</router-link>
      <router-link to="/all" :active-class="$style.activeLink">Подписки</router-link>
      <router-link to="/all" :active-class="$style.activeLink">Группы</router-link>
    </section>
    <section :class="`${$style.section} ${$style.searchSection}`">
      <SearchInputUI>
        <input placeholder="Найти пост..." :class="$style.findPosts"/>
      </SearchInputUI>
    </section>
  </div>
</template>

<style lang="scss" module>
.container {
  padding-top: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
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
  width: 268px;
  height: 54px;
}
.menuSection {
  justify-content: center;
  align-items: end;
  flex-direction: column;
  width: 100%;
}
.menuSection > * {
  padding-left: 16px;
  display: flex;
  justify-self: center;
  align-items: center;
  height: 40px;
  width: 284px;
  color: var(--ui-primary-color);
}
.activeLink {
  font-weight: bold;
}
.menuSection > *:hover, .activeLink {
  background: var(--ui-main-color);
  border-radius: var(--border-radius-sub-base) 0 0 var(--border-radius-sub-base);
}
.searchSection {
  width: 236px;
  height: 40px;
}
.findPosts::placeholder {
  color: var(--ui-secondary-color);
}
</style>>