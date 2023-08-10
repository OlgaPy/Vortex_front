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
  font-size: 12px;
}
.small {
  font-size: 13px;
}
.medium {
  font-size: 14px;
}
.large {
  font-size: 15px;
}
</style>