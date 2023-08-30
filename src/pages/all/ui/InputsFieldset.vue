<script setup lang="ts">
import { InputType } from '@/shared/ui/input-ui/types';
import InputUI from '@/shared/ui/input-ui/InputUI.vue';
</script>

<template>
	<fieldset>
		<label>Inputs</label>

		<InputUI :type="InputType.OUTFOCUS">
			<input placeholder="Placeholder" />
		</InputUI>
		<InputUI :type="InputType.FOCUS">
			<input placeholder="Placeholder" />
		</InputUI>
		<InputUI :type="InputType.SUCCESSFUL">
			<input placeholder="Placeholder" />
		</InputUI>
		<InputUI :type="InputType.ERROR">
			<input placeholder="Placeholder" />
		</InputUI>
	</fieldset>
</template>

<style scoped></style>
