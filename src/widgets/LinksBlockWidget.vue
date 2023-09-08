<script setup lang="ts">
import UniformBlockUI from "@/shared/ui/block-ui/blocks/UniformBlockUI.vue";
import type {RouteRecordRaw} from "vue-router";

export type LinksBlockWidgetProps = {
  routes: RouteRecordRaw[],
};

const {routes} = defineProps<LinksBlockWidgetProps>();
</script>

<template>
  <UniformBlockUI :class="$style.container">
    <router-link
      v-for="(route, index) in routes"
      :key="index"
      :to="route.path"
    >
      {{ route.name }}
    </router-link>
  </UniformBlockUI>
</template>

<style module>
.container {
  font: var(--font-small);
  width: 100%;
  min-height: 240px;
  gap: 14px;
}
</style>
