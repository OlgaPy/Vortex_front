<script setup lang="ts">
import ShareIcon from '@/shared/assets/icons/ShareIcon.svg'
import IconTextButtonUI from '@/shared/ui/icon-button-ui/IconTextButtonUI.vue'
</script>

<template>
	<IconTextButtonUI>
		<template #left-icon>
			<ShareIcon :class="$style.shareIcon" />
		</template>
	</IconTextButtonUI>
</template>

<style module>
.shareIcon {
	width: 24px;
	height: 24px;
	color: var(--color-gray-53);
}
</style>
