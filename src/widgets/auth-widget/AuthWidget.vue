<script setup lang="ts">
import ToggleGlobalThemeFeature from "@/features/ToggleGlobalThemeFeature.vue";
import BlockWindow from "@/shared/ui/block-ui/blocks/BlockWindowUI.vue";
import EmptyButtonUI from "@/shared/ui/button-ui/EmptyButtonUI.vue";
import LoginForm from "@/widgets/auth-widget/forms/login-form/LoginForm.vue";
import PasswordRecoveryForm from "@/widgets/auth-widget/forms/password-recovery-form/PasswordRecoveryForm.vue";
import PasswordRecoverySent from "@/widgets/auth-widget/forms/password-recovery-form/PasswordRecoverySent.vue";
import RegistrationForm from "@/widgets/auth-widget/forms/registration-form/RegistrationForm.vue";
import {AUTH_FORMS} from "@/widgets/auth-widget/types";
import {ref} from "vue";

const currentForm = ref<AUTH_FORMS>(AUTH_FORMS.LOGIN);

const setCurrentForm =  (form: AUTH_FORMS) => {
	currentForm.value = form;
}

const setDefaultForm = () => {
  setCurrentForm(AUTH_FORMS.LOGIN);
};
</script>

<template>
  <BlockWindow v-if="currentForm === AUTH_FORMS.LOGIN">
    <template #header-left>
      <h3 class="font-sub-title-bold">Войдите в аккаунт</h3>
    </template>
    <template #header-right>
      <ToggleGlobalThemeFeature/>
    </template>
    <template #body>
      <LoginForm @recover-password="setCurrentForm(AUTH_FORMS.PASSWORD_RECOVERY)">
        <template #action-button>
          <EmptyButtonUI @click="setCurrentForm(AUTH_FORMS.REGISTRATION)">
            Зарегистрироваться
          </EmptyButtonUI>
        </template>
      </LoginForm>
    </template>
  </BlockWindow>

  <BlockWindow v-else-if="currentForm === AUTH_FORMS.REGISTRATION" @close="setDefaultForm">
    <template #header-left>
      <h3 class="font-sub-title-bold">Регистрация</h3>
    </template>
    <template #body>
      <RegistrationForm />
    </template>
  </BlockWindow>

  <BlockWindow v-else-if="currentForm === AUTH_FORMS.PASSWORD_RECOVERY" @close="setDefaultForm">
    <template #header-left>
      <h3 class="font-sub-title-bold">Восстановление пароля</h3>
    </template>
    <template #body>
      <PasswordRecoveryForm @submit="setCurrentForm(AUTH_FORMS.PASSWORD_RECOVERY_SENT)"/>
    </template>
  </BlockWindow>

  <BlockWindow v-else-if="currentForm === AUTH_FORMS.PASSWORD_RECOVERY_SENT" @close="setDefaultForm">
    <template #header-left>
      <h3 class="font-sub-title-bold">Восстановление пароля</h3>
    </template>
    <template #body>
      <PasswordRecoverySent>
        <template #action-button>
          <EmptyButtonUI @click="setDefaultForm">
            На главную
          </EmptyButtonUI>
        </template>
      </PasswordRecoverySent>
    </template>
  </BlockWindow>
</template>