<script setup lang="ts">
import CloseIcon from '@/shared/assets/icons/CloseIcon.svg';
import MegaphoneIcon from '@/shared/assets/icons/MegaphoneIcon.svg';
import MenuIcon from '@/shared/assets/icons/MenuIcon.svg';
import PlusIcon from '@/shared/assets/icons/PlusIcon.svg';
import ShortLogoIcon from '@/shared/assets/icons/ShortLogoIcon.svg';
import {useMobileNavigationStore} from '@/shared/stores/MobileNavigationStore';
import OnlyIconButtonUI from '@/shared/ui/icon-button-ui/OnlyIconButtonUI.vue';
import OnlyIconEmptyButtonUI from '@/shared/ui/icon-button-ui/OnlyIconEmptyButtonUI.vue';
import Icon from "@/shared/ui/icon/Icon.vue";
import {IconSizes} from "@/shared/ui/icon/types";

const MobileNavigationStore = useMobileNavigationStore();
</script>

<template>
	<div :class="$style.header">
		<slot name="left-content">
			<div :class="$style.headerItem">
        <Icon
            :size="IconSizes.THIRTY_TWO" v-if="!MobileNavigationStore.showNavigationPage"
            @click="MobileNavigationStore.toggleNavigationPage"
        >
				  <MenuIcon/>
        </Icon>
        <div :class="$style.closeIcon" @click="MobileNavigationStore.toggleNavigationPage" v-else>
          <Icon :size="IconSizes.TWELVE" clickable>
            <CloseIcon/>
          </Icon>
        </div>
        <router-link to="/" :class="$style.shortLogoLink">
          <ShortLogoIcon/>
        </router-link>
			</div>
		</slot>

		<slot name="right-content">
			<div :class="$style.headerItem">
				<OnlyIconEmptyButtonUI>
          <Icon :size="IconSizes.SIXTEEN">
            <MegaphoneIcon/>
          </Icon>
				</OnlyIconEmptyButtonUI>
				<!-- TODO: wide screen variant -->
				<OnlyIconButtonUI>
          <Icon :size="IconSizes.SIXTEEN">
            <PlusIcon/>
          </Icon>
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

.closeIcon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
}

.shortLogoLink {
  width: 36px;
  height: 32px;
}
</style>
