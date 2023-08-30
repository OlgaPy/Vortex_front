<script setup lang="ts">
import DesktopPageUI from '@/shared/ui/page-ui/DesktopPageUI.vue';
import Buttons from './ui/ButtonsFieldset.vue';
import Checkboxes from './ui/CheckboxesFieldset.vue';
import Features from './ui/FeaturesFieldset.vue';
import IconButtons from './ui/IconButtonsFieldset.vue';
import Inputs from './ui/InputsFieldset.vue';
import Textarea from './ui/TextareaFieldset.vue';
</script>

<template>
	<DesktopPageUI :class="$style.container">
		<Features />
		<Buttons />
		<Checkboxes />
		<IconButtons />
		<Inputs />
		<Textarea />
	</DesktopPageUI>
</template>

<style module>
.container {
	display: flex;
	flex-wrap: wrap;
}
.container > * {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 8px;
	padding: 8px;
	font: var(--font-text);
}
</style>
