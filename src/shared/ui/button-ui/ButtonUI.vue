<script setup lang="ts">
import type {Props} from "./types";

const {activity, type} = defineProps<Props>();
</script>

<template>
  <button :class="$style.container" :data-activity="activity" :data-type="type">
    <slot></slot>
  </button>
</template>

<style module>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 296px;
  font-size: var(--text-font-size-medium);
  font-weight: normal;
  line-height: 16px;
  letter-spacing: 0.5px;
  border-radius: var(--border-radius-sub-base);
}

.container[data-activity="active"] {
  background-color: var(--ui-accent-color);
  color: var(--ui-accent-color);
  border: 1px solid var(--ui-accent-color);
}
.container[data-activity="inactive"] {
  background-color: var(--ui-disabled-color);
  color: var(--ui-disabled-color);
  border: 1px solid var(--ui-disabled-color);
}

.container[data-type="filled"] {
  background-color: var(--ui-accent-color);
  color: var(--ui-accent-contrast-color);
}
.container[data-type="default"] {
  color: var(--ui-accent-color);
  border: 1px solid var(--ui-accent-color);
  background-color: unset;
}
.container[data-type="text"] {
  background-color: unset;
  border: unset;
}
</style>
