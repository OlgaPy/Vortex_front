<script setup lang="ts">
import InputUI from '@/shared/ui/input-ui/InputUI.vue';
import { InputType } from '@/shared/ui/input-ui/types';
import IconTextButtonUI from '@/shared/ui/icon-button-ui/IconTextButtonUI.vue';
import ArrowDownIcon from '@/shared/assets/icons/ArrowDownIcon.svg'
import ButtonUI from '@/shared/ui/button-ui/ButtonUI.vue';
import EmptyButtonUI from '@/shared/ui/button-ui/EmptyButtonUI.vue';
import {ref} from "vue";
import {useAuthStore} from "@/shared/stores/AuthStore";

//TODO REFACTOR
const username = ref('kapibarin');
const password = ref('ficYP5MV');

const authStore = useAuthStore();
</script>

<template>
	<form :class="$style.container">
		<h1 :class="$style.header">
			Вход или регистрация
		</h1>
		<div :class="$style.control">
			<label :class="$style.label">
				Введите ник:
			</label>
			<InputUI :type="InputType.OUTFOCUS" :class="$style.input">
				<input v-model="username"/>
			</InputUI>
		</div>
		<div :class="$style.control">
			<label :class="$style.label">
				Введите пароль:
			</label>
			<InputUI :type="InputType.OUTFOCUS" :class="$style.input">
				<input v-model="password"/>
			</InputUI>
		</div>
		<IconTextButtonUI :class="$style.help">
			<template #text>
				<div>Забыли пароль?</div>
			</template>
			<template #right-icon>
				<ArrowDownIcon :class="$style.icon"/>
			</template>
		</IconTextButtonUI>
		<ButtonUI :class="$style.button" @click.prevent="authStore.login(username, password)">
			Войти
		</ButtonUI>
		<EmptyButtonUI :class="$style.button">
			Зарегистрироваться
		</EmptyButtonUI>
	</form>
</template>

<style module>
.container {
	padding: 24px 12px;
}

.header {
	font: var(--font-sub-title-bold);
}

.control {
	margin-top: 20px;
}

.label {
	display: block;
	font: var(--font-sub-title);
	margin-bottom: 8px;
}

.help {
	margin-top: 8px;
	color: var(--color-primary-2);
}

.icon {
	height: 12px;
	width: 12px;
}

.input {
	width: 100%;
}

.button {
	margin-top: 16px;
	width: 100%;
}
</style>
