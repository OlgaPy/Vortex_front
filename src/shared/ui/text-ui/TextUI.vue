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
.medium {
  font-size: 15px;
}
.small {
  font-size: 13px;
}
</style>