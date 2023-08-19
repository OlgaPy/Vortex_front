<script setup lang="ts">
import RemoveButtonUI from '@/shared/ui/remove-button-ui/RemoveButtonUI.vue'
import type {Emits} from './types'

const emit = defineEmits<Emits>()

</script>

<template>
  <label :class="[$style.container, 'color-gray-53', 'font-size-micro']">
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
  border-radius: var(--style-radius-5);
  border: 1.5px solid var(--color-gray-53);
	gap: 10px;
}
</style>
