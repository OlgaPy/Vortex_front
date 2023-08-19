<script setup lang="ts">
import ToggleGlobalThemeFeature from "@/features/ToggleGlobalThemeFeature.vue";
import TogglePostActionsDirection from '@/features/TogglePostActionsDirection.vue';
import PageUI from "@/shared/ui/PageUI.vue";
import TextareaUI from "@/shared/ui/textarea-ui/TextareaUI.vue";
import InputUI from "@/shared/ui/input-ui/InputUI.vue";
import {InputType} from "@/shared/ui/input-ui/types";
import ButtonUI from "@/shared/ui/button-ui/ButtonUI.vue";
import EmptyButtonUI from "@/shared/ui/button-ui/EmptyButtonUI.vue";
import TextButtonUI from "@/shared/ui/button-ui/TextButtonUI.vue";
</script>

<template>
  <PageUI :class="$style.container">
		<ToggleGlobalThemeFeature/>
		<TogglePostActionsDirection/>

		<span>//TODO Textarea auto-sizing</span>
		<TextareaUI>
			<textarea :class="$style.textarea"></textarea>
		</TextareaUI>

		<InputUI :type="InputType.OUTFOCUS">
			<input placeholder="Placeholder"/>
		</InputUI>
		<InputUI :type="InputType.FOCUS">
			<input placeholder="Placeholder"/>
		</InputUI>
		<InputUI :type="InputType.SUCCESSFUL">
			<input placeholder="Placeholder"/>
		</InputUI>
		<InputUI :type="InputType.ERROR">
			<input placeholder="Placeholder"/>
		</InputUI>

		<EmptyButtonUI>Button</EmptyButtonUI>
		<EmptyButtonUI disabled>Button</EmptyButtonUI>
		<ButtonUI>Button</ButtonUI>
		<ButtonUI disabled>Button</ButtonUI>
		<TextButtonUI>Button</TextButtonUI>
		<TextButtonUI disabled>Button</TextButtonUI>
	</PageUI>
</template>

<style module>
.container {
	padding: 20px;
	justify-content: center;
	align-items: center;
	gap: 10px;
}
</style>
