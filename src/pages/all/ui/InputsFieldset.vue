<script setup lang="ts">
import InputUI from '@/shared/ui/input-ui/InputUI.vue';
import {ref} from 'vue';

const exampleValue = ref('exampleValue');
const exampleEmptyValue = ref('');
const validator = (value: string) => {
	if (value !== 'hide_error') {
		return {
			errors: ['Terrible Error']
		};
	}

	return null;
};
</script>

<template>
	<fieldset>
		<label>Inputs</label>

		<InputUI label="Base" v-model="exampleValue" />

		<InputUI label="With placeholder" v-model="exampleEmptyValue" placeholder="Placeholder" />

		<InputUI
			label="With errors as props"
			:errors="['propError1', 'propError2']"
			v-model="exampleValue"
		/>

		<InputUI label="Hide text" hide-text v-model="exampleValue" />

		<InputUI label="With hint" show-hint v-model="exampleValue" />

		<InputUI
			label="With validator (enter: hide_error)"
			v-model="exampleValue"
			:validators="[validator]"
		/>
	</fieldset>
</template>

<style scoped></style>
