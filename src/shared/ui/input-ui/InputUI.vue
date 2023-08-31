<script setup lang="ts">
import type {Emits, Props} from './types'
import WarningCircle from '@/shared/assets/icons/WarningCircle.svg';
import {ref} from "vue";

const emit = defineEmits<Emits>();

const { modelValue, label, hideText, showHint, validators } = defineProps<Props>();
const localErrors = ref<string[]>([]);
const inputValue = ref(modelValue);

const validate = (value: string) => {
	localErrors.value = [];

	if (!validators)
		return;

	for (let validator of validators) {
		const validationResults = validator(value);

		if (!validationResults)
			continue;

		if (validationResults.errors) {
			for (let error of validationResults.errors) {
				localErrors.value.push(error);
			}
		}
	}
};

const onChange = (value: string) => {
	validate(value);
	emit('update:modelValue', value);
};

const onFocusOut = (value: string) => {
	validate(value);
};

validate(modelValue);
</script>

<template>
	<div :class="$style.container">
		<label :class="$style.label">
			{{ label }}
		</label>

		<section :class="$style.inputSection">
			<input
				:class="$style.input"
				:type="hideText? 'password' : 'text'"
				v-model="inputValue"
				@change="onChange(inputValue)"
				@focusout="onFocusOut(inputValue)"
			/>
			<div :class="$style.hint" v-show="showHint">
				<!--TODO hint absolute block-->
				<WarningCircle/>
				<div>
					<slot name="hint"></slot>
				</div>
			</div>
		</section>

		<section :class="$style.infoSection">
			<span :class="$style.errorText" v-for="(error, index) in localErrors" :key="index">
				{{ error }}
			</span>
		</section>

		<section :class="$style.actionsSection">
			<slot name="actions"></slot>
		</section>
	</div>
</template>

<style module>
.container {
	display: flex;
	justify-content: center;
	align-items: start;
	flex-direction: column;
	width: 100%;
	gap: 8px;
	font: var(--font-text);
}

.label {
	color: var(--color-gray-22);
}

.inputSection {
	padding: 8px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	border-radius: var(--style-radius-5);
	font: var(--font-small);
	background-color: var(--color-gray-92);
}

.input {
	display: flex;
	width: calc(100% - 24px);
	font: var(--font-small);
	color: var(--color-gray-53);
	outline: none;
	border: unset;
	background-color: inherit;
}
.input::placeholder {
	color: var(--color-gray-53);
}

.input[data-type='focus'],
.input::placeholder {
	border-color: var(--color-gray-53);
	color: var(--color-gray-53);
}

.input[data-type='error'],
.input[data-type='error']::placeholder {
	background-color: var(--color-base-bg);
	border-color: var(--color-red-70);
	color: var(--color-red-79);
}

.input[data-type='successful'],
.input[data-type='successful']::placeholder {
	background-color: var(--color-base-bg);
	border-color: var(--color-primary-1);
	color: var(--color-primary-2);
}

.hint {
	width: 16px;
	height: 16px;
	cursor: pointer;
	color: var(--color-gray-53);
}

.actionsSection, .infoSection {
	display: flex;
	justify-content: center;
	align-items: start;
	flex-direction: column;
	width: 100%;
}

.errorText {
	color: var(--color-red-70);
}
</style>
