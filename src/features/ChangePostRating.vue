<script setup lang="ts">
import IconTextUI from '@/shared/ui/IconTextUI.vue'
import RateUpIcon from '@/shared/ui/icons/RateUpIcon.vue'
import RateDownIcon from '@/shared/ui/icons/RateDownIcon.vue'
import { useInvertedPostActions } from '@/shared/stores/UserSettingsStore'

const inverted = useInvertedPostActions()
</script>

<template>
	<IconTextUI
		:class="[
			$style.container,
			{
				[$style.inverted]: inverted
			}
		]"
	>
		<template #left-icon><RateUpIcon /></template>
		<template #text>
			<span :class="$style.ratingCount">432099</span>
		</template>
		<template #right-icon><RateDownIcon /></template>
	</IconTextUI>
</template>

<style module>
.container {
	gap: 8px;
}

.inverted {
	flex-direction: row-reverse;
}
</style>
