<script setup lang="ts">
import CloseIcon from "@/shared/assets/icons/CloseIcon.svg";
import {useFieldFocusStatus} from "@/shared/ui/input-ui/lib/use-field-focus-status";
import {useFieldStatus} from "@/shared/ui/input-ui/lib/use-field-status";
import {useValidation} from "@/shared/ui/input-ui/lib/use-validation";
import HintPopupUI from "@/shared/ui/input-ui/ui/HintPopupUI.vue";
import {ref} from 'vue';
import type {Emits, InputProps} from './types';
import {FieldFocusStates} from './types';

const emit = defineEmits<Emits>();

const { modelValue, label, hideText, showHint, validators, errors, placeholder } = defineProps<InputProps>();
const inputValue = ref(modelValue || null);

const validation = useValidation(validators, errors);
const fieldStatus = useFieldStatus();
const fieldFocusStatus = useFieldFocusStatus();

const onChange = (value: string | null) => {
	inputValue.value = value;
	validation.validate(value);
	emit('update:modelValue', value);
	fieldStatus.changeFieldStatus(value, validation.errors.value);
};

const onFocusOut = (value: string | null) => {
	validation.validate(value);
	fieldFocusStatus.setFieldFocusStatus(FieldFocusStates.NONE);
};

const onFocusIn = () => {
	fieldFocusStatus.setFieldFocusStatus(FieldFocusStates.FOCUS);
};

validation.validate(modelValue);
fieldStatus.changeFieldStatus(modelValue, validation.errors.value);
</script>

<template>
	<div :class="$style.container">
		<label :class="$style.label">
			{{ label }}
		</label>

		<section
			:class="$style.inputSection"
			:data-status="fieldStatus.status.value"
			:data-focus-status="fieldFocusStatus.status.value"
		>
			<input
				:class="$style.input"
				:type="hideText ? 'password' : 'text'"
				v-model="inputValue"
				@change="onChange(inputValue)"
				@focusout="onFocusOut(inputValue)"
				@focusin="onFocusIn"
				:placeholder="placeholder"
			/>

			<div :class="$style.actionIcons">
        <HintPopupUI v-show="showHint">
          <template #hint><slot name="hint"></slot></template>
        </HintPopupUI>
        <CloseIcon :class="$style.clearIcon" @click="onChange('')" v-show="inputValue" />
			</div>
		</section>

		<section :class="$style.infoSection">
			<span :class="$style.errorText" v-for="(error, index) in validation.errors.value" :key="index">
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
	height: calc(1em + 2px);
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

.actionsSection,
.infoSection {
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
