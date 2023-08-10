<script setup lang="ts">
import TrendsFeedWidget from "@/widgets/TrendsFeedWidget.vue";
import TapeMenu from "@/widgets/TapeLinksWidget.vue";
import Header from "@/widgets/HeaderWidget.vue";
</script>

<template>
  <div :class="$style.page">
    <header :class="$style.headerContainer">
      <Header/>
      <TapeMenu/>
    </header>
    <TrendsFeedWidget/>
  </div>
</template>

<style module>
.page {
  display: flex;
  justify-content: center;
  align-items: start;
  height: 100%;
  width: 100%;
  background: var(--ui-main-color);
  color: var(--ui-primary-color);
}

.headerContainer {
  width: 100%;
  -webkit-box-shadow: 0px 1px 3px 0px var(--ui-box-shadow-color);
  -moz-box-shadow: 0px 1px 3px 0px var(--ui-box-shadow-color);
  box-shadow: 0px 1px 3px 0px var(--ui-box-shadow-color);
}
</style>