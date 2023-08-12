<script setup lang="ts">
import type {Props} from "./types";

const {size} = defineProps<Props>();
</script>

<template>
  <span :class="[$style.container, $style[size]]"><slot></slot></span>
</template>

<style module>
.container {
  font-weight: normal;
  line-height: 16px;
}
.small {
  font-size: var(--title-font-size-small);
}
.large {
  font-size: var(--title-font-size-large);
  line-height: 20px;
  font-weight: 500;
}
</style>