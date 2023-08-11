<script setup lang="ts">
import type {Props} from "./types";

const {size} = defineProps<Props>();
</script>

<template>
  <div :class="[$style.container, $style[size]]"><slot></slot></div>
</template>

<style module>
.container {
  font-weight: normal;
  line-height: 16px;
  letter-spacing: 0.5px;
}
.micro {
  font-size: var(--text-font-size-micro);
}
.small {
  font-size: var(--text-font-size-small);
}
.medium {
  font-size: var(--text-font-size-medium);
}
.large {
  font-size: var(--text-font-size-large);
}
</style>