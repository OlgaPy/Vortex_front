<script setup lang="ts">
import ArrowIcon from '@/shared/assets/icons/ArrowIcon.svg';
import ButtonUI from '@/shared/ui/button-ui/ButtonUI.vue';
import InputUI from '@/shared/ui/input-ui/InputUI.vue';
import type {LoginFormEmits} from "@/widgets/auth-widget/forms/login-form/types";
import {ref} from 'vue';

const emits = defineEmits<LoginFormEmits>();

const username = ref('kapibarin');
const password = ref('ficYP5MV');

</script>

<template>
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
          <div :class="$style.forgotPassword">
            <span @click="emits('recover-password')">Забыли пароль?</span>
            <ArrowIcon/>
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
      <slot name="action-button"/>
    </div>
  </main>
</template>

<style module>
.main,
.fieldset {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 32px;
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
  gap: 24px;
}

.buttons > * {
  width: 100%;
}
</style>
