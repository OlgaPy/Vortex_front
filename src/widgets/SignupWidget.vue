<script setup lang="ts">
import ButtonUI from '@/shared/ui/button-ui/ButtonUI.vue';
import InputUI from '@/shared/ui/input-ui/InputUI.vue';
import CheckboxUI from '@/shared/ui/checkbox-ui/CheckboxUI.vue';
import ToggleGlobalThemeFeature from '@/features/ToggleGlobalThemeFeature.vue';
import {ref} from 'vue';

const mail = ref('kapib@r.in');
const username = ref('kapibarin');
const password = ref('ficYP5MV');
const passwordRepeat = ref('ficYP5MV');
const accept = ref(false);
</script>

<template>
	<div :class="$style.container">
		<header :class="$style.header">
			<h3 class="font-sub-title">Регистрация</h3>
			<ToggleGlobalThemeFeature />
		</header>

		<main :class="$style.main">
			<fieldset :class="$style.fieldset">
				<InputUI
					label="Электронная почта*"
					v-model="mail"
				/>

				<InputUI
					label="Ник*"
					v-model="username"
				/>

				<InputUI
					label="Пароль*"
					hide-text
					v-model="password"
				/>

				<InputUI
					label="Повторите пароль*"
					hide-text
					v-model="passwordRepeat"
					:validators="[s => ({ errors: ['Сообщение об ошибке'] })]"
				/>
			</fieldset>

			<div :class="$style.agreement">
				<CheckboxUI v-model="accept" :class="$style.checkbox"/>
				<div>
					Ознакомлен и согласен с
					<a href="./" :class="$style.link">условиями пользовательского соглашения</a>
				</div>
			</div>

			<div :class="$style.buttons">
				<ButtonUI>Получить код на почту</ButtonUI>
			</div>
		</main>
	</div>
</template>

<style module>
.container,
.main,
.fieldset {
	display: flex;
	justify-content: center;
	align-items: left;
	flex-direction: column;
	width: 100%;
	gap: 32px;
}

.main {
	gap: 0;
}

.container {
	padding: 32px;
	background-color: var(--color-gray-98);
	border-radius: var(--style-radius-10);
}

.header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
}
.header > h3 {
	font: var(--font-sub-title-bold);
}

.fieldset {
	margin: unset;
	padding: unset;
	border: unset;
	gap: 8px;
}

.buttons {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100%;
	gap: 32px;
}
.buttons > * {
	width: 100%;
}

.agreement {
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 8px;
	font: var(--font-text);
	margin: 16px 0 40px;
}

.checkbox {
	width: fit-content;
}

.link {
	color: var(--color-primary-1);
}
</style>
