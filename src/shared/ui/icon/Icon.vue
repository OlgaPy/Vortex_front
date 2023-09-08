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
  <i :class="iconClass">
    <slot/>
  </i>
</template>

<style module lang="scss">
.clickable {
  cursor: pointer;
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