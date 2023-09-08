<script setup lang="ts">
import CloseIcon from "@/shared/assets/icons/CloseIcon.svg";
import type {BlockWindowUIEmits} from "@/shared/ui/block-ui/types";
import Icon from "@/shared/ui/icon/Icon.vue";
import {IconSizes} from "@/shared/ui/icon/types";

const emits = defineEmits<BlockWindowUIEmits>();
</script>

<template>
  <div :class="$style.container">
    <slot name="header">
      <header :class="$style.header">
        <slot name="header-left"></slot>
        <slot name="header-right">
          <div :class="$style.closeIcon">
            <Icon :size="IconSizes.TWELVE" clickable @click="emits('close')">
              <CloseIcon/>
            </Icon>
          </div>
        </slot>
      </header>
    </slot>
    <main :class="$style.main">
      <slot name="body" />
    </main>
  </div>
</template>

<style module lang="scss">
.container, .main {
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

.main {
  width: 100%;
}

.closeIcon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
}
</style>