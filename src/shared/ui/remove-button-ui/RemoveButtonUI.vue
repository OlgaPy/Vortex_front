<script setup lang="ts">
import TrashIcon from '@/shared/ui/icons/TrashIcon.vue'
</script>

<template>
  <button :class="$style.container">
		<TrashIcon/>
  </button>
</template>

<style module>
.container {
	width: 32px;
	height: 32px;
	display: flex;
  justify-content: center;
  align-items: center;
	border-radius: 8px;
  background-color: #e4e4e488;
}
</style>
