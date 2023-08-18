<script setup lang="ts">
import { useUserSettingsStore, EPostActionsDirection } from '@/shared/stores/UserSettingsStore';
import { storeToRefs } from 'pinia';

const settingsStore = useUserSettingsStore();
const { settings } = storeToRefs(settingsStore);
const { setPostActionsDirection } = settingsStore;
</script>

<template>
	<div :class="$style.container">
		<button
			v-for="direction in Object.keys(EPostActionsDirection)"
			:key="direction"
			:class="[$style.button, {
				[$style.buttonActive]: settings.postActionsDirection === EPostActionsDirection[direction],
			}]"
			@click="setPostActionsDirection(EPostActionsDirection[direction])"
		>
			Direction: {{ direction.toLowerCase() }}
		</button>
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
