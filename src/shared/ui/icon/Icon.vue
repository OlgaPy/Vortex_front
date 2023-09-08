<script setup lang="ts">
import type {IconProps} from "@/shared/ui/icon/types";
import {useCssModule} from "vue";

const {size, clickable} = defineProps<IconProps>();
const style = useCssModule();
const iconClass = [ style[size] ];

if (clickable) {
  iconClass.push(style.clickable);
}
</script>

<template>
  <i :class="[$style.icon, iconClass]">
    <slot/>
  </i>
</template>

<style module lang="scss">
.icon {
  display: flex;
  justify-content: center;
  align-items: center;
}

.clickable {
  cursor: pointer;
}

.ten {
  width: 10px;
  height: 10px;
}

.twelve {
  width: 12px;
  height: 12px;
}

.sixteen {
  width: 16px;
  height: 16px;
}

.eighteen {
  width: 18px;
  height: 18px;
}

.twentyFour {
  width: 24px;
  height: 24px;
}

.thirtyTwo {
  width: 32px;
  height: 32px;
}
</style>