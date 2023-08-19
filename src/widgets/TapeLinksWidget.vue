<script setup lang="ts">
import {useCssModule} from "vue";

const style = useCssModule();
const items = [
  {name: 'Тренды', path: '/', style: style.trends},
  {name: 'Новое', path: '/all', style: style.new},
  {name: 'Топ', path: '/all', style: style.top},
  {name: 'Обсуждаемое', path: '/all', style: style.discussed},
  {name: 'Подписки', path: '/all', style: style.subscriptions},
  {name: 'Группы', path: '/all', style: style.groups},
];
</script>

<template>
  <div :class="$style.container">
    <router-link
        v-for="(item, index) in items" :key="index"
        :class="item.style" :active-class="$style.activeItem" :to="item.path"
    >
      <span class="font-text-large">{{item.name}}}</span>
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
}
</style>
