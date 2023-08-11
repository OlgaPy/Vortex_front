<script setup lang="ts">
import type {Props} from "./types";

const {type} = defineProps<Props>();
</script>

<template>
  <label :class="$style.container" :data-type="type">
    <slot></slot>
  </label>
</template>

<style module>
.container {
  padding: 8px;
  display: flex;
  justify-content: start;
  align-items: center;
  width: 296px;
  font-size: var(--text-font-size-micro);
  font-weight: normal;
  line-height: 16px;
  border-radius: var(--border-radius-sub-base);
}

.container[data-type="outfocus"] {
  border: 1.5px solid var(--ui-secondary-color);
  color: var(--ui-secondary-color);
}
.container[data-type="outfocus"] input::placeholder {
  color: var(--ui-secondary-color);
}

.container[data-type="focus"] {
  border: 1.5px solid var(--ui-secondary-color);
  color: var(--ui-secondary-color);
}
.container[data-type="focus"] input::placeholder {
  color: var(--ui-secondary-color);
}

.container[data-type="error"] {
  background-color: var(--ui-error-bg-color);
  border: 1.5px solid var(--ui-error-border-color);
  color: var(--ui-error-color);
}
.container[data-type="error"] input::placeholder {
  color: var(--ui-error-color);
}

.container[data-type="successful"] {
  background-color: var(--ui-accent-contrast-color);
  border: 1.5px solid var(--ui-accent-color);
  color: var(--ui-accent-2-color);
}
.container[data-type="successful"] input::placeholder {
  color: var(--ui-accent-2-color);
}
</style>