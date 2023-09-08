<script setup lang="ts">
import ButtonUI from '@/shared/ui/button-ui/ButtonUI.vue';
import EmptyButtonUI from '@/shared/ui/button-ui/EmptyButtonUI.vue';
import CheckboxUI from "@/shared/ui/checkbox-ui/CheckboxUI.vue";
import InputUI from '@/shared/ui/input-ui/InputUI.vue';
import ToggleGlobalThemeFeature from '@/features/ToggleGlobalThemeFeature.vue';
import ArrowIcon from '@/shared/assets/icons/ArrowIcon.svg';
import {ref} from 'vue';

const username = ref('kapibarin');
const password = ref('ficYP5MV');

</script>

<template>
  <main :class="$style.main">
    <fieldset :class="$style.fieldset">
      <InputUI label="Электронная почта*" show-hint v-model="username">
        <template #hint>
          <p>Размер ника от 4 до 16 символов;</p>
          <p>
            Разрешены буквы (a-z, A-Z), цифры (0-9), дефис (-), точка (.), нижнее подчеркивание
            (_)
          </p>
        </template>
      </InputUI>

      <InputUI label="Ник*" show-hint v-model="username">
        <template #hint>
          <p>Размер ника от 4 до 16 символов;</p>
          <p>
            Разрешены буквы (a-z, A-Z), цифры (0-9), дефис (-), точка (.), нижнее подчеркивание
            (_)
          </p>
        </template>
      </InputUI>

      <InputUI label="Пароль*" show-hint hide-text v-model="password">
        <template #hint>
          <p>Размер пароля от 8 до 128 символов;</p>
          <p>Разрешены буквы (a-z, A-Z), цифры (0-9) и символы (!@#$%^&*()_-+=);</p>
          <p>Требуется минимум одна буква и минимум одна цифра</p>
        </template>
      </InputUI>

      <InputUI label="Повторите пароль*" show-hint hide-text v-model="password">
        <template #hint>
          <p>Размер пароля от 8 до 128 символов;</p>
          <p>Разрешены буквы (a-z, A-Z), цифры (0-9) и символы (!@#$%^&*()_-+=);</p>
          <p>Требуется минимум одна буква и минимум одна цифра</p>
        </template>
      </InputUI>

      <CheckboxUI :model-value="false">
					<span :class="$style.licenseLinkLabel">
						Ознакомлен и согласен с условиями&nbsp;
						<router-link to="/404" :class="$style.licenseLink">пользовательского соглашения</router-link>
					</span>
      </CheckboxUI>
    </fieldset>

    <!--	TODO Actions		-->
    <div :class="$style.buttons">
      <EmptyButtonUI>Зарегистрироваться</EmptyButtonUI>
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

.header > h3 {
  font: var(--font-sub-title-bold);
}

.fieldset {
  margin: unset;
  padding: unset;
  border: unset;
  gap: 8px;
}

.licenseLinkLabel {
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  font: var(--font-small);
}

.licenseLink {
  color: var(--color-primary-1);
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
