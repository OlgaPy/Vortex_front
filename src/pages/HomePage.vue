<script setup lang="ts">
import TrendsFeedWidget from "@/widgets/trends-feed-widget/TrendsFeedWidget.vue";
import TapeMenu from "@/widgets/TapeLinksWidget.vue";
import Header from "@/widgets/HeaderWidget.vue";
</script>

<template>
  <div :class="$style.page">
    <header :class="$style.headerContainer">
      <Header/>
      <TapeMenu/>
    </header>
    <TrendsFeedWidget :class="$style.trendsFeedWidget"/>
  </div>
</template>

<style module>
.page {
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background: var(--ui-main-color);
  color: var(--ui-primary-color);
}

.headerContainer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: var(--ui-sub-main-color);
  -webkit-box-shadow: 0px 1px 3px 0px var(--ui-box-shadow-color);
  -moz-box-shadow: 0px 1px 3px 0px var(--ui-box-shadow-color);
  box-shadow: 0px 1px 3px 0px var(--ui-box-shadow-color);
  z-index: 1;
}

.trendsFeedWidget {
  margin-top: 100px;
}
</style>