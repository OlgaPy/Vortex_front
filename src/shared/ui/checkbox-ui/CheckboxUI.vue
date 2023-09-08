<script setup lang="ts">
import CheckIcon from '@/shared/assets/icons/CheckIcon.svg';
import Icon from "@/shared/ui/icon/Icon.vue";
import {IconSizes} from "@/shared/ui/icon/types";
import {ref} from "vue";
import type {Emits, Props} from './types';

const { modelValue } = defineProps<Props>();
const checked = ref(modelValue || false);
const emit = defineEmits<Emits>();

const onChange = (value: boolean) => {
    checked.value = value;
    emit('update:modelValue', value);
};
</script>

<template>
	<div :class="$style.container" @click.prevent="onChange(!checked)">
		<input type="checkbox" v-model="checked" :class="$style.hidden" />
		<div :class="$style.view">
			<div :class="$style.icon">
        <Icon :size="IconSizes.EIGHTEEN" clickable v-show="checked">
          <CheckIcon/>
        </Icon>
			</div>
      <div :class="$style.label">
			  <slot></slot>
      </div>
		</div>
	</div>
</template>

<style module>
.container {
	display: flex;
	width: 100%;
	font: var(--font-sub-title);
	color: var(--color-gray-22);
	cursor: pointer;
}

.view {
	display: flex;
	justify-content: start;
	align-items: start;
	width: 100%;
	height: 100%;
	gap: 12px;
}

.icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22px;
  height: 22px;
  border: 1px solid var(--color-gray-22);
  border-radius: var(--style-radius-5);
}

.label {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  flex-wrap: wrap;
}

.hidden {
	width: 0;
	height: 0;
	margin: 0;
	appearance: none;
}
</style>
