<script setup lang="ts">
import InputUI from '@/shared/ui/input-ui/InputUI.vue';
</script>

<template>
	<form :class="$style.container">
		<div :class="$style.header">
			<h3 :class="$style.title">Восстановление пароля</h3>
			<slot name="header"></slot>
		</div>
		<InputUI
			label="Введите электронную почту:"
			model-value=""
			:class="$style.input"
			type="email"
			placeholder="kapi..."
		/>
		<slot name="button" />
	</form>
</template>

<style module>
.container {
	display: grid;
	grid-template-columns: 1fr;
	padding: 32px;
}

.header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 32px;
}

.title {
	font-size: 18px;
	font-weight: 700;
	line-height: 24px;
	letter-spacing: 0px;
	font: var(--font-sub-title-bold);
}

label {
	font-size: 18px;
	font-weight: 400;
	line-height: 24px;
	letter-spacing: 0px;
	text-align: left;
	display: inline-block;
}

.input {
	margin-bottom: 16px;
}

.input > label {
	display: inline-block;
	margin-bottom: 2px;
}

.input > section {
	background-color: var(--color-gray-89);
}
</style>
