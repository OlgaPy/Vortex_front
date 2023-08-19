<script setup lang="ts">
import type {Props} from "./types";

const {activity, type} = defineProps<Props>();
</script>

<template>
  <button :class="[$style.container, 'font-btn']" :data-activity="activity" :data-type="type">
    <slot></slot>
  </button>
</template>

<style module>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.5px;
  border-radius: var(--style-radius-5);
  border: unset;
  background: unset;
}

.container[data-activity="active"] {
  background-color: var(--color-primary-1);
  color: var(--color-primary-1);
  border: 1px solid var(--color-primary-1);
}
.container[data-activity="inactive"] {
  background-color: var(--color-gray-73);
  color: var(--color-gray-53);
  border: 1px solid var(--color-gray-73);
}

.container[data-type="filled"] {
  background-color: var(--color-primary-1);
  color: var(--color-base-bg);
}
.container[data-type="default"] {
  color: var(--color-primary-1);
  border: 1px solid var(--color-primary-1);
  background-color: unset;
}
.container[data-type="text"] {
  background-color: unset;
  border: unset;
}
</style>
