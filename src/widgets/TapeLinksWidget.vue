<script setup lang="ts">
import TextUI from "@/shared/ui/text-ui/TextUI.vue";
</script>

<template>
  <div :class="$style.container">
    <router-link :class="$style.trends" :active-class="$style.activeItem" to="/">
      <TextUI size="large">Тренды</TextUI>
    </router-link>
    <router-link :class="$style.new" :active-class="$style.activeItem" to="/all">
      <TextUI size="large">Новое</TextUI>
    </router-link>
    <router-link :class="$style.top" :active-class="$style.activeItem" to="/all">
      <TextUI size="large">Топ</TextUI>
    </router-link>
    <router-link :class="$style.discussed" :active-class="$style.activeItem" to="/all">
      <TextUI size="large">Обсуждаемое</TextUI>
    </router-link>
    <router-link :class="$style.subscriptions" :active-class="$style.activeItem" to="/all">
      <TextUI size="large">Подписки</TextUI>
    </router-link>
    <router-link :class="$style.groups" :active-class="$style.activeItem" to="/all">
      <TextUI size="large">Группы</TextUI>
    </router-link>
  </div>
</template>

<style module>
.container {
  display: flex;
  justify-items: start;
  align-items: center;
  width: 100%;
  overflow-y: auto;
  padding: 8px;
}
.container::-webkit-scrollbar {
  display: none;
}

.container > * {
  display: flex;
  justify-items: center;
  align-items: start;
  padding: 8px 4px;
}

.trends {
  width: 62px;
}
.new {
  width: 55px;
}
.top {
  width: 35px;
}
.discussed {
  width: 111px;
}
.subscriptions {
  width: 82px;
}
.groups {
  width: 59px;
}

.activeItem > * {
  font-weight: 500;
  font-size: 14px;
}
</style>