<script setup lang="ts">
import ShortLogoIcon from '@/shared/ui/icons/ShortLogoIcon.svg'
import MenuIcon from '@/shared/ui/icons/MenuIcon.svg'
import CloseMenu from '@/shared/ui/icons/CloseMenu.svg'
import AuthWidget from '@/widgets/AuthWidget.vue'
import IconButtonUI from '@/shared/ui/icon-button-ui/IconButtonUI.vue'
import PlusIcon from '@/shared/ui/icons/PlusIcon.svg'
import MegaphoneIcon from '@/shared/ui/icons/MegaphoneIcon.svg'

import { useMobileNavigationStore } from '@/shared/stores/MobileNavigationStore'
const MobileNavigationStore = useMobileNavigationStore()
</script>

<template>
	<div :class="$style.header">
		<div :class="$style.container">
			<MenuIcon
				v-if="!MobileNavigationStore.showNavigationPage"
				@click="MobileNavigationStore.toggleNavigationPage"
				:class="$style.menuButton"
			/>
			<CloseMenu
				v-else
				@click="MobileNavigationStore.toggleNavigationPage"
				:class="$style.menuButton"
			/>
			<ShortLogoIcon :class="$style.logoIcon"></ShortLogoIcon>
		</div>
		<div :class="$style.container">
			<IconButtonUI :class="$style.icon_button">
				<template #left-icon>
					<MegaphoneIcon />
				</template>
			</IconButtonUI>
			<!-- TODO: wide screen variant -->
			<IconButtonUI :class="$style.icon_button_filled">
				<template #left-icon>
					<PlusIcon :class="$style.plus_icon" />
				</template>
			</IconButtonUI>
			<AuthWidget />
		</div>
	</div>
</template>

<style module>
.header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 56px;
	padding: 10px 12px;
}

.container {
	display: flex;
	align-items: center;
	gap: 24px;
}

.icon_button_filled {
	background-color: var(--color-primary-1);
	height: 32px;
	width: 32px;
	border-radius: var(--style-radius-16);
	color: var(--color-gray-98);
}
.icon_button {
	height: 32px;
	width: 32px;
	border-radius: var(--style-radius-16);
	border: 1px solid var(--color-primary-1);
}

.plus_icon {
	height: 10px;
	width: 10px;
}
.menuButton {
	cursor: pointer;
}
</style>
