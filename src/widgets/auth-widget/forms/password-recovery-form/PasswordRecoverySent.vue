<script setup lang="ts">
</script>

<template>
  <div :class="$style.container">
    <span :class="$style.sent">Мы отправили письмо с инструкцией на указанный адрес электронной почты.</span>
    <slot name="action-button"/>
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

.sent {
  font: var(--font-sub-title);
  color: var(--color-gray-22);
  display: block;
  margin-bottom: 32px;
}
</style>