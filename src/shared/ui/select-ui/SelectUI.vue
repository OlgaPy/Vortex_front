<script setup lang="ts">
import type {Emits, Option, Props} from "./types";
import ArrowIcon from '@/shared/assets/icons/ArrowIcon.svg';
import SearchIcon from '@/shared/assets/icons/SearchIcon.svg';
import {ref} from 'vue';
import {autoUpdate, flip, shift, useFloating} from '@floating-ui/vue';

const reference = ref(null);
const floating = ref(null);
const {floatingStyles} = useFloating(reference, floating, {
	middleware: [shift(), flip()],
	whileElementsMounted: autoUpdate,
});

const emit = defineEmits<Emits>();
const { modelValue, options, attractorText } = defineProps<Props>();

const isOpen = ref(false);

const openList = () => {
  isOpen.value = true;
};
const closeList = () => {
  isOpen.value = false;
};

const selectOption = (option: Option) => {
  emit('update:modelValue', option);
  closeList();
};
</script>

<template>
	<div :class="[$style.container, {[$style.isActive]: isOpen}]" v-outside-click="closeList">

    <div :class="$style.preview" ref="reference">
			<div :class="$style.attractor" @click="openList">
				<span>{{ modelValue? modelValue.text : attractorText }}</span>
				<ArrowIcon :class="$style.arrowIcon"/>
			</div>
			<div :class="$style.search">
				<input type="text" placeholder="Введите название…"/>
				<SearchIcon/>
			</div>
		</div>

		<div :class="$style.selectionWindow" ref="floating" :style="floatingStyles">
			<ul :class="$style.options">
				<li
            :class="$style.option"
            v-for="(option, index) in options"
            :key="index"
            @click="() => { selectOption(option); }"
        >
					<div :class="$style.optionText">{{ option.text }}</div>
					<div :class="$style.optionIcon">
            <ArrowIcon :class="$style.arrowIcon"/>
          </div>
				</li>
			</ul>
		</div>

	</div>
</template>

<style module lang="scss">
.container {
	--search-icon-width: 16px;

	display: flex;
	justify-content: start;
	align-items: center;
	flex-direction: column;
	width: 100%;
	position: relative;
}

.preview {
	display: block;
	width: 100%;
}

.attractor {
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 4px;
	padding: 8px;
	width: 100%;
	font: var(--font-text);
	color: var(--color-primary-2);
	background-color: var(--color-gray-89);
	border-radius: var(--style-radius-5);
	cursor: pointer;
}
.isActive .attractor {
	display: none;
}
.search {
	display: none;
	justify-content: space-between;
	align-items: center;
	gap: 4px;
	padding: 8px;
	width: 100%;
	font: var(--font-text);
	background-color: var(--color-gray-89);
	color: var(--color-gray-53);
	border-radius: var(--style-radius-5);
}
.isActive .search {
	display: flex;
}

.selectionWindow {
	display: none;
	justify-content: center;
	align-items: start;
	flex-direction: column;
	width: 100%;
	font: var(--font-text);
	border-radius: var(--style-radius-5);
	overflow: hidden;
}
.isActive .selectionWindow {
	display: flex;
}
.search > input {
	border: none;
	background: none;
	outline: none;
	color: var(--color-gray-53);
	width: 100%;
}
.search > input::placeholder {
	color: var(--color-gray-53);
}
.options {
	display: flex;
	justify-content: center;
	align-items: start;
	flex-direction: column;
	width: 100%;
	background-color: var(--color-gray-98);
	color: var(--color-primary-2);
}
.option {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	padding: 8px;
	border-bottom: 1px solid var(--color-gray-89);
	cursor: pointer;
}
.option:last-child {
	border-bottom-color: var(--color-gray-98);
}

.arrowIcon {
  width: 10px;
  height: 6px;
	transform: rotateZ(90deg);
}
</style>
