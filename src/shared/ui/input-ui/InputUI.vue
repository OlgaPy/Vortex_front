<script setup lang="ts">
import type {Props} from "./types";

const {type} = defineProps<Props>();
</script>

<template>
	<label :class="[$style.container, 'font-text-micro']" :data-type="type">
		<slot></slot>
	</label>
</template>

<style module>
.container {
	padding: 8px;
	display: flex;
	justify-content: start;
	align-items: center;
	width: 296px;
	border-radius: var(--style-radius-5);
	border-width: 1.5px;
	border-style: solid;
}

.container input {
	background: inherit;
	border: unset;
	outline: none;
}

.container[data-type="outfocus"] {
	border-color: var(--color-gray-53);
}
.container[data-type="outfocus"]	input, .container[data-type="outfocus"] input::placeholder {
	color: var(--color-gray-53);
}

.container[data-type="focus"] {
	border-color: var(--color-gray-53);
}
.container[data-type="focus"] input, .container[data-type="focus"] input::placeholder {
	color: var(--color-gray-53);
}

.container[data-type="error"] {
	background-color: var(--color-base-bg);
	border-color: var(--color-red-70);
}
.container[data-type="error"] input, .container[data-type="error"] input::placeholder {
	color: var(--color-red-79);
}

.container[data-type="successful"] {
	background-color: var(--color-base-bg);
	border-color: var(--color-primary-1);
}
.container[data-type="successful"]	input, .container[data-type="successful"] input::placeholder {
	color: var(--color-primary-2);
}
</style>
