<script setup lang="ts">
import ButtonUI from '@/shared/ui/button-ui/ButtonUI.vue';
import EmptyButtonUI from '@/shared/ui/button-ui/EmptyButtonUI.vue';
import InputUI from '@/shared/ui/input-ui/InputUI.vue';
import ToggleGlobalThemeFeature from '@/features/ToggleGlobalThemeFeature.vue';
import ArrowIcon from '@/shared/assets/icons/ArrowIcon.svg';
import { ref } from 'vue';

const username = ref('kapibarin');
const password = ref('ficYP5MV');
</script>

<template>
	<div :class="$style.container">
		<header :class="$style.header">
			<h3 class="font-sub-title">Войдите в аккаунт</h3>
			<ToggleGlobalThemeFeature />
		</header>

		<main :class="$style.main">
			<fieldset :class="$style.fieldset">
				<InputUI label="Введите ник:" show-hint v-model="username">
					<template #hint>
						<p>Размер ника от 4 до 16 символов;</p>
						<p>
							Разрешены буквы (a-z, A-Z), цифры (0-9), дефис (-), точка (.), нижнее подчеркивание
							(_)
						</p>
					</template>
				</InputUI>

				<InputUI label="Введите пароль:" show-hint hide-text v-model="password">
					<template #actions>
						<!--	TODO Actions		-->
						<div :class="$style.forgotPassword">
							<span>Забыли пароль?</span>
							<ArrowIcon />
						</div>
					</template>
					<template #hint>
						<p>Размер пароля от 8 до 128 символов;</p>
						<p>Разрешены буквы (a-z, A-Z), цифры (0-9) и символы (!@#$%^&*()_-+=);</p>
						<p>Требуется минимум одна буква и минимум одна цифра</p>
					</template>
				</InputUI>
			</fieldset>

			<!--	TODO Actions		-->
			<div :class="$style.buttons">
				<ButtonUI>Войти</ButtonUI>
				<EmptyButtonUI>Зарегистрироваться</EmptyButtonUI>
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
	align-items: center;
	flex-direction: column;
	width: 100%;
	gap: 32px;
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

.forgotPassword {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 4px;
	color: var(--color-primary-2);
	cursor: pointer;
}
.forgotPassword > svg {
	width: 12px;
	height: 12px;
	transform: rotateZ(180deg);
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
</style>
