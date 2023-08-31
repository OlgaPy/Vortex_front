<script setup lang="ts">
import SaveIcon from '@/shared/assets/icons/SaveIcon.svg';
import IconTextButtonUI from '@/shared/ui/icon-button-ui/IconTextButtonUI.vue';
</script>

<template>
	<IconTextButtonUI>
		<template #left-icon>
			<SaveIcon :class="$style.saveIcon" />
		</template>
	</IconTextButtonUI>
</template>

<style module>
.saveIcon {
	width: 24px;
	height: 24px;
	color: var(--color-gray-53);
}
</style>
