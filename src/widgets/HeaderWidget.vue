<script setup lang="ts">
import ShortLogoIcon from '@/shared/ui/icons/ShortLogoIcon.svg'
import MenuIcon from '@/shared/ui/icons/MenuIcon.svg'
import AuthWidget from '@/widgets/AuthWidget.vue'
</script>

<template>
	<div :class="$style.container">
		<MenuIcon :class="$style.menuButton"></MenuIcon>
		<ShortLogoIcon :class="$style.logoIcon"></ShortLogoIcon>
		<AuthWidget />
	</div>
</template>

<style module>
.container {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 56px;
	padding: 10px 12px;
}
</style>
