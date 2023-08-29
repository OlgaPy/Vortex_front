<script setup lang="ts">
import type { IUserSettings } from '@/shared/stores/UserSettingsStore'
import { EPostActionsDirection, useUserSettingsStore } from '@/shared/stores/UserSettingsStore'
import { storeToRefs } from 'pinia'
import FilledButtonUI from '@/shared/ui/button-ui/ButtonUI.vue'
import { computed } from 'vue'

const settingsStore = useUserSettingsStore()
const { settings } = storeToRefs(settingsStore)
const { setPostActionsDirection } = settingsStore

const postActionsDirection = computed<string>(() => {
	const settingsValue = settings.value as IUserSettings
	return settingsValue.postActionsDirection
})
</script>

<template>
	<div :class="$style.container">
		<FilledButtonUI
			v-for="direction in Object.values(EPostActionsDirection)"
			:key="direction"
			:class="[
				$style.button,
				{
					[$style.buttonActive]: postActionsDirection === direction
				}
			]"
			@click="setPostActionsDirection(direction)"
		>
			Direction: {{ direction.toLowerCase() }}
		</FilledButtonUI>
	</div>
</template>

<style module>
.container {
	display: flex;
	gap: 10px;
}

.button {
	text-transform: capitalize;
}

.button:hover {
	cursor: pointer;
}

.buttonActive {
	font-weight: bold;
}
</style>
