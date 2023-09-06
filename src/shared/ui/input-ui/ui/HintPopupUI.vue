<script setup lang="ts">
import WarningCircle from "@/shared/assets/icons/WarningCircleIcon.svg";
import CloseIcon from "@/shared/assets/icons/CloseIcon.svg";
import {ref} from "vue/dist/vue";
import {autoUpdate, flip, shift, useFloating} from "@floating-ui/vue";

const reference = ref(null);
const floating = ref(null);
const { floatingStyles } = useFloating(reference, floating, {
	middleware: [shift(), flip()],
	whileElementsMounted: autoUpdate
});

const showHintPopup = ref(false);

const openHintPopup = () => {
	showHintPopup.value = true;
};

const closeHintPopup = () => {
	if (showHintPopup.value) {
		showHintPopup.value = false;
	}
};
</script>

<template>
	<div>
		<WarningCircle
			:class="$style.hintIcon"
			ref="reference"
			@click="openHintPopup"
			v-outside-click="closeHintPopup"
		/>
		<CloseIcon :class="$style.clearIcon" @click="onChange('')" v-show="inputValue" />

		<div
			:class="$style.hintWrapper"
			ref="floating"
			:style="floatingStyles"
			v-show="showHintPopup"
		>
			<slot name="hint"></slot>
		</div>
	</div>
</template>

<style module lang="scss">
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
</style>
