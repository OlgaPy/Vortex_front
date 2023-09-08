<script setup lang="ts">
import ButtonUI from "@/shared/ui/button-ui/ButtonUI.vue";
import InputUI from '@/shared/ui/input-ui/InputUI.vue';
import type {PasswordRecoveryFormEmits} from "@/widgets/auth-widget/forms/password-recovery-form/types";

const emit = defineEmits<PasswordRecoveryFormEmits>();
</script>

<template>
  <div :class="$style.container">
    <InputUI
        label="Введите электронную почту:"
        model-value=""
        type="email"
        placeholder="kapi..."
    />
    <ButtonUI @click="emit('submit')">Восстановить</ButtonUI>
  </div>
</template>

<style module>
.container {
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  gap: 32px;
  width: 100%;
}
.container > button {
  width: 100%;
}
</style>
