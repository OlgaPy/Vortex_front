<script setup lang="ts">
import type {Emits, Props} from './types'
import {InputFocusStates, InputStates} from "./types";
import WarningCircle from '@/shared/assets/icons/WarningCircleIcon.svg';
import CloseIcon from '@/shared/assets/icons/CloseIcon.svg';
import {ref} from "vue";
import {autoUpdate, flip, shift, useFloating} from "@floating-ui/vue";

const reference = ref(null);
const floating = ref(null);
const {floatingStyles} = useFloating(reference, floating, {
	middleware: [shift(), flip()],
	whileElementsMounted: autoUpdate
});

const emit = defineEmits<Emits>();

const {modelValue, label, hideText, showHint, validators, errors, placeholder} = defineProps<Props>();
const localErrors = ref<string[]>(errors || []);
const inputValue = ref(modelValue || null);
const inputStatus = ref<InputStates>();
const inputFocusStatus = ref<InputFocusStates>();
const showHintPopup = ref(false);

const openHintPopup = () => {
	showHintPopup.value = true;
};

const closeHintPopup = () => {
	if (showHintPopup.value) {
		showHintPopup.value = false;
	}
}

const validate = (value: string | null) => {
	localErrors.value = errors || [];

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

const changeInputStatus = () => {
	if (inputValue.value) {
		if (inputValue.value && localErrors.value.length > 0) {
			inputStatus.value = InputStates.ERROR;
		} else {
			inputStatus.value = InputStates.SUCCESSFUL;
		}
	} else {
		inputStatus.value = InputStates.NONE;
	}
};

const setInputFocusStatus = (state: InputFocusStates) => {
	inputFocusStatus.value = state;
};

const onChange = (value: string | null) => {
	inputValue.value = value;
	validate(value);
	emit('update:modelValue', value);
	changeInputStatus();
};

const onFocusOut = (value: string | null) => {
	validate(value);
	setInputFocusStatus(InputFocusStates.NONE);
};

const onFocusIn = () => {
	setInputFocusStatus(InputFocusStates.FOCUS);
}

validate(modelValue);
changeInputStatus();
</script>

<template>
	<div :class="$style.container">
		<label :class="$style.label">
			{{ label }}
		</label>

		<section :class="$style.inputSection" :data-status="inputStatus" :data-focus-status="inputFocusStatus">
			<input
				:class="$style.input"
				:type="hideText? 'password' : 'text'"
				v-model="inputValue"
				@change="onChange(inputValue)"
				@focusout="onFocusOut(inputValue)"
				@focusin="onFocusIn"
				:placeholder="placeholder"
			/>

			<div :class="$style.actionIcons">
				<WarningCircle
					:class="$style.hintIcon"
					v-show="showHint"
					ref="reference"
					@click="openHintPopup"
					v-outside-click="closeHintPopup"
				/>
				<CloseIcon
					:class="$style.clearIcon"
					@click="onChange('')"
					v-show="inputValue"
				/>

				<div
					:class="$style.hintWrapper"
					ref="floating"
					:style="floatingStyles"
					v-show="showHintPopup"
				>
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
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	border-radius: var(--style-radius-5);
	font: var(--font-small);
	border: 1.5px solid var(--color-gray-92);
	background-color: unset;
	color: var(--color-gray-53);
}

.inputSection[data-focus-status='focus'] {
	background-color: var(--color-gray-92);
	border-color: var(--color-gray-92);
	color: var(--color-gray-53);
}

.inputSection[data-status='error'] {
	border-color: var(--color-red-70);
	color: var(--color-red-79);
}

.inputSection[data-status='successful'] {
	border-color: var(--color-primary-1);
	color: var(--color-primary-2);
}

.input {
	margin: 8px;
	display: flex;
	width: 100%;
	font: var(--font-small);
	outline: none;
	border: unset;
	background-color: inherit;
	color: inherit;
	border-radius: var(--style-radius-5);
}

.actionIcons {
	position: absolute;
	right: 8px;
	top: calc(50% - 8px);
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 8px;
}

.hintIcon {
	width: 16px;
	height: 16px;
	cursor: pointer;
}
.clearIcon {
	width: 14px;
	height: 14px;
	cursor: pointer;
}

.hintWrapper {
	margin: 4px;
	padding: 12px;
	display: flex;
	justify-content: center;
	align-items: start;
	flex-direction: column;
	width: 264px;
	height: auto;
	font: var(--font-small);
	border-radius: var(--style-radius-10);
	background-color: var(--color-gray-98);
	border: 1px solid var(--color-gray-92);
	color: var(--color-gray-22);
	overflow: hidden;
	z-index: 1000;
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
