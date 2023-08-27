<script setup lang="ts">
import {ThemeModes, useThemeStore} from '@/shared/stores/ThemeStore'
import {storeToRefs} from 'pinia'
import SunIcon from '@/shared/assets/icons/SunIcon.svg'
import MoonIcon from '@/shared/assets/icons/MoonIcon.svg'

const store = useThemeStore()
const { themeMode } = storeToRefs(store)
const { setThemeMode } = store

const toggleThemeMode = () => {
	const newMode = themeMode.value !== ThemeModes.DARK ? ThemeModes.DARK : ThemeModes.LIGHT
	setThemeMode(newMode)
}
</script>

<template>
	<label
		@click.prevent="toggleThemeMode"
		:class="$style.container"
	>
		<input
			type="checkbox"
			:checked="themeMode === ThemeModes.DARK"
			:class="$style.checkbox"
		/>
  	<span :class="$style.slider"></span>
		<SunIcon
			v-if="themeMode === ThemeModes.DARK"
			:class="$style.sun_icon"
		/>
		<MoonIcon
			v-else
			:class="$style.moon_icon"
		/>
	</label>
</template>

<style module>
.container {
	position: relative;
	height: 24px;
	width: 48px;
	border-radius: 12px;
	cursor: pointer;
	background-color: var(--color-gray-22);
	box-shadow: inset 2px 0 4px var(--color-gray-8);
}

.checkbox {
	width: 0;
	height: 0;
	appearance: none;
}

.slider {
	position: absolute;
	left: 2px;
	top: 2px;
	width: 20px;
	height: 20px;
	background-color: var(--color-primary-1);
	border-radius: 50%;
	box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.15),
							0px 1px 2px rgba(0, 0, 0, 0.30);
}

.checkbox:checked + .slider {
	left: calc(48px - 20px - 2px);
}

.moon_icon {
	position: absolute;
	top: 4px;
	right: 4px;
}

.sun_icon {
	position: absolute;
	top: 4px;
	left: 4px;
}
</style>
