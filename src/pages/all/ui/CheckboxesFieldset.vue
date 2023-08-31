<script setup lang="ts">
import CheckboxUI from '@/shared/ui/checkbox-ui/CheckboxUI.vue';
import { ref } from 'vue';

let checked = ref(true),
	unchecked = ref(false);
</script>

<template>
	<fieldset>
		<label>Checkboxes</label>
		<CheckboxUI v-model="unchecked">Awesome checkbox</CheckboxUI>
		<CheckboxUI v-model="checked">Awesome checked checkbox</CheckboxUI>
	</fieldset>
</template>

<style scoped></style>
