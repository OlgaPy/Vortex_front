<script setup lang="ts">
import { useThemeStore, ThemeModes } from '@/shared/stores/ThemeStore'
import { storeToRefs } from 'pinia'
import MoonIcon from '@/shared/ui/icons/MoonIcon.svg'
import SunIcon from '@/shared/ui/icons/SunIcon.svg'

const themeStore = useThemeStore()
const { setThemeMode } = themeStore
const { themeMode } = storeToRefs(themeStore)

function changeTheme() {
	setThemeMode(themeMode.value === ThemeModes.DARK ? ThemeModes.LIGHT : ThemeModes.DARK)
}
</script>

<template>
	<div
		:class="[
			$style.container,
			{
				[$style.containerDark]: themeMode === ThemeModes.DARK
			}
		]"
		@click="changeTheme"
	>
		<div :class="$style.filler"></div>
		<div v-if="themeMode !== ThemeModes.DARK" :class="$style.icon"><SunIcon /></div>
		<div v-else :class="$style.icon"><MoonIcon /></div>
	</div>
</template>

<style module>
.container {
	position: relative;
	height: 24px;
	width: 48px;
	border-radius: var(--style-radius-16);
	padding: 2px;
	background: var(--color-gray-89);
	box-shadow: 2px 0 4px 0 var(--color-dark-gray-73) inset;
	cursor: pointer;
}

.filler {
	position: absolute;
	top: 2px;
	left: 2px;
	width: 20px;
	height: 20px;
	border-radius: var(--style-radius-50per);
	background: var(--color-primary-1);
	box-shadow:
		0 1px 3px 1px var(--color-black-0-15),
		0 1px 2px 0 var(--color-black-0-30);
	transform: translateX(24px);
}

.icon {
	position: absolute;
	top: 50%;
	left: 4px;
	transform: translateY(-50%);
	display: flex;
}

.containerDark .filler {
	transform: translateX(0px);
}

.containerDark .icon {
	left: auto;
	right: 4px;
}
</style>
