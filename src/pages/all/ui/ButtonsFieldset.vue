<script setup lang="ts">

import ButtonUI from "@/shared/ui/button-ui/ButtonUI.vue";
import EmptyButtonUI from "@/shared/ui/button-ui/EmptyButtonUI.vue";
import TextButtonUI from "@/shared/ui/button-ui/TextButtonUI.vue";
</script>

<template>
	<fieldset>
		<label>Buttons</label>

		<EmptyButtonUI>Button</EmptyButtonUI>
		<EmptyButtonUI disabled>Button</EmptyButtonUI>

		<ButtonUI>Button</ButtonUI>
		<ButtonUI disabled>Button</ButtonUI>

		<TextButtonUI>Button</TextButtonUI>
		<TextButtonUI disabled>Button</TextButtonUI>
	</fieldset>
</template>

<style scoped>

</style>
