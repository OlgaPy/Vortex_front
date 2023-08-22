<script setup lang="ts">
import SaveIcon from '@/shared/ui/icons/SaveIcon.svg'
import IconButtonUI from '@/shared/ui/icon-button-ui/IconButtonUI.vue'
</script>

<template>
	<IconButtonUI>
		<template #left-icon>
			<SaveIcon :class="$style.saveIcon"/>
		</template>
	</IconButtonUI>
</template>

<style module>
.saveIcon {
  width: 24px;
  height: 24px;
}
</style>
