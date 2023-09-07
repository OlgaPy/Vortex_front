<script setup lang="ts">
import PasswordRecoveryForm from './form/PasswordRecoveryForm.vue';
import PasswordRecoverySent from './form/PasswordRecoverySent.vue';
import ToggleGlobalThemeFeature from '@/features/ToggleGlobalThemeFeature.vue';
import CloseMenu from '@/shared/assets/icons/CloseMenu.svg';
import ButtonUI from '@/shared/ui/button-ui/ButtonUI.vue';
import { ref } from 'vue';

enum CurrentPage {
	FORM,
	SENT
}

const currentPage = ref(CurrentPage.FORM);

const RecoverPassword = () => {
	currentPage.value = CurrentPage.SENT;
};
</script>

<template>
	<div :class="$style.container">
			<PasswordRecoveryForm v-if="currentPage == CurrentPage.FORM">
				<template v-slot:header>
					<ToggleGlobalThemeFeature :class="$style.recoveryMobile" />
					<CloseMenu :class="[$style.closeMenu, $style.recoveryDesktop]" />
				</template>
				<template v-slot:button>
					<ButtonUI :class="$style.bold" @click="RecoverPassword">Восстановить</ButtonUI>
				</template>
			</PasswordRecoveryForm>
			<PasswordRecoverySent v-else>
				<template v-slot:header>
					<ToggleGlobalThemeFeature :class="$style.recoveryMobile" />
					<CloseMenu :class="[$style.closeMenu, $style.recoveryDesktop]" />
				</template>
				<template v-slot:button>
					<ButtonUI :class="$style.bold" @click="RecoverPassword">На главную</ButtonUI>
				</template>
			</PasswordRecoverySent>
	</div>
</template>

<style module lang="scss">
.recoveryDesktop,
.recoveryMobile {
	display: none;
}

@media screen and (max-width: $screen-xl) {
	.recoveryMobile {
		display: flex;
	}
}

@media screen and (min-width: $screen-xl) {
	.recoveryDesktop {
		display: flex;
	}
}

.container {
	background: var(--color-gray-98);
	color: var(--color-gray-22);
	border-radius: 10px;
	width: 100%;
	min-width: fit-content;
}

.bold {
	font: var(--font-text-bold);
}

.closeMenu {
	cursor: pointer;
}
</style>
