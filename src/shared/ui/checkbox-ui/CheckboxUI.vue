<script setup lang="ts">
import CheckIcon from '@/shared/ui/icons/CheckIcon.vue'
import type { Props, Emits } from './types'

const { modelValue } = defineProps<Props>()
const emit = defineEmits<Emits>()
</script>

<template>
	<label :class="$style.container" @click.prevent="() => emit('update:modelValue', !modelValue)">
		<input type="checkbox" :checked="modelValue" :class="$style.hidden" />
		<template v-if="modelValue">
			<CheckIcon />
		</template>
	</label>
</template>

<style module>
.container {
	width: 22px;
	height: 22px;
	border: 2px solid var(--color-gray-53);
	border-radius: var(--style-radius-5);
	color: var(--color-base-bg);
	cursor: pointer;
}

.hidden {
	width: 0;
	height: 0;
	margin: 0;
	appearance: none;
}
</style>
