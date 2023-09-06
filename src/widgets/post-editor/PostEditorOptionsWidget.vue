<script setup lang="ts">
import CheckboxUI from '@/shared/ui/checkbox-ui/CheckboxUI.vue';
import SelectUI from '@/shared/ui/select-ui/SelectUI.vue';
import type {Option} from '@/shared/ui/select-ui/types';
import {ref} from 'vue';

let checked = ref(true),
	unchecked = ref(false);

let options = ref<Option[]>([
	{ text: 'Лига капибар', value: '1' },
	{ text: 'Лига капибар 1', value: '2' },
	{ text: 'Лига капибар 2', value: '3' }
]);
let selectedOption = ref(null);
</script>

<template>
	<section :class="$style.container">
		<CheckboxUI v-model="unchecked">Авторский контент</CheckboxUI>
		<CheckboxUI v-model="checked">Опубликовать пост в группе</CheckboxUI>
		<SelectUI
			:class="$style.chooseGroup"
			:options="options"
			attractor-text="Выберите группу"
			v-model="selectedOption"
		/>
	</section>
</template>

<style module lang="scss">
.container {
	display: flex;
	justify-content: center;
	align-items: start;
	flex-direction: column;
	width: 100%;
	gap: 20px;
	padding: 12px 8px;
	border-radius: var(--style-radius-10);
	background-color: var(--color-gray-98);
}

.chooseGroup {
	width: 245px;
}
</style>
