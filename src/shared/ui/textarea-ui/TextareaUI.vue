<script setup lang="ts">
import RemoveButtonUI from '@/shared/ui/remove-button-ui/RemoveButtonUI.vue'
import type { Emits } from './types'

const emit = defineEmits<Emits>()

</script>

<template>
  <label :class="$style.container">
		<slot></slot>
		<div>
			<RemoveButtonUI @click="$emit('remove')" />
		</div>
  </label>
</template>

<style module>
.container {
	min-height: 150px;
  padding: 8px;
  display: flex;
  justify-content:stretch;
  align-items: start;
  font-size: var(--text-font-size-micro);
  font-weight: normal;
  line-height: 16px;
  border-radius: var(--border-radius-sub-base);
  border: 1.5px solid var(--ui-secondary-color);
  color: var(--ui-secondary-color);
	gap: 10px;
}
</style>
