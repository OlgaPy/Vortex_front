<script setup lang="ts">
import ShortLogoIcon from '@/shared/assets/icons/ShortLogoIcon.svg';
import MenuIcon from '@/shared/assets/icons/MenuIcon.svg';
import CloseMenu from '@/shared/assets/icons/CloseMenu.svg';
import PlusIcon from '@/shared/assets/icons/PlusIcon.svg';
import MegaphoneIcon from '@/shared/assets/icons/MegaphoneIcon.svg';
import {useMobileNavigationStore} from '@/shared/stores/MobileNavigationStore';
import OnlyIconButtonUI from '@/shared/ui/icon-button-ui/OnlyIconButtonUI.vue';
import OnlyIconEmptyButtonUI from '@/shared/ui/icon-button-ui/OnlyIconEmptyButtonUI.vue';

const MobileNavigationStore = useMobileNavigationStore();
</script>

<template>
	<div :class="$style.header">
		<slot name="left-content">
			<div :class="$style.headerItem">
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
		</slot>

		<slot name="right-content">
			<div :class="$style.headerItem">
				<OnlyIconEmptyButtonUI>
					<MegaphoneIcon :class="$style.megaphoneIcon" />
				</OnlyIconEmptyButtonUI>
				<!-- TODO: wide screen variant -->
				<OnlyIconButtonUI>
					<PlusIcon :class="$style.plusIcon" />
				</OnlyIconButtonUI>
				<router-link to="/auth">
					<span :class="[$style.authText, 'font-text color-gray-22']">Войти</span>
				</router-link>
			</div>
		</slot>
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

.headerItem {
	display: flex;
	align-items: center;
	gap: 24px;
}

.megaphoneIcon {
	height: 16px;
	width: 16px;
}

.plusIcon {
	height: 10px;
	width: 10px;
}

.menuButton {
	cursor: pointer;
}
</style>
