<script setup lang="ts">
import {useProfileStore} from "@/entities/profile/model/ProfileStore";
import {useMobileNavigationStore} from '@/shared/stores/MobileNavigationStore';
import DesktopAsideBlockUI from '@/shared/ui/block-ui/DesktopAsideBlockUI.vue';
import DesktopMainBlockUI from '@/shared/ui/block-ui/DesktopMainBlockUI.vue';
import HeaderHorizontalPanelUI from '@/shared/ui/block-ui/HorizontalPanelUI.vue';
import MobileMainBlockUI from '@/shared/ui/block-ui/MobileMainBlockUI.vue';
import DesktopPageUI from '@/shared/ui/page-ui/DesktopPageUI.vue';
import MobilePageUI from '@/shared/ui/page-ui/MobilePageUI.vue';
import AdInfoPanelWidget from '@/widgets/AdInfoPanelWidget.vue';
import AuthWidget from "@/widgets/auth-widget/AuthWidget.vue";
import HeaderWidget from '@/widgets/HeaderWidget.vue';
import ProfilePanelWidget from '@/widgets/profile-panel-widget/ProfilePanelWidget.vue';
import SidebarNavigationMobileWidget from '@/widgets/SidebarNavigationMobileWidget.vue';
import SiteNavigationPanelWidget from '@/widgets/site-navigation-widget/SiteNavigationPanelWidget.vue';
import SiteInfoPanel from '@/widgets/SiteInfoPanel.vue';

const MobileNavigationStore = useMobileNavigationStore();
const profileStore = useProfileStore();
//TODO move component to right place
</script>

<template>
	<div>
		<div :class="$style.desktopPage">
			<DesktopPageUI>
				<DesktopAsideBlockUI>
					<SiteNavigationPanelWidget />
				</DesktopAsideBlockUI>

				<DesktopMainBlockUI>
          <slot name="content"></slot>
					<slot name="content-desktop"></slot>
				</DesktopMainBlockUI>

				<DesktopAsideBlockUI>
          <ProfilePanelWidget v-if="profileStore.isAuth()" />
          <AuthWidget v-else />
					<SiteInfoPanel />
					<AdInfoPanelWidget />
				</DesktopAsideBlockUI>
			</DesktopPageUI>
		</div>

    <div :class="[$style.tablePage, $style.mobilePage]">
      <MobilePageUI>
        <HeaderHorizontalPanelUI>
          <slot name="header-mobile">
            <HeaderWidget />
          </slot>
          <SidebarNavigationMobileWidget v-if="MobileNavigationStore.showNavigationPage" />
        </HeaderHorizontalPanelUI>

        <MobileMainBlockUI :class="$style.tableBlock">
          <slot name="content"></slot>
          <slot name="content-table"></slot>
        </MobileMainBlockUI>

        <MobileMainBlockUI :class="$style.mobileBlock">
          <slot name="content"></slot>
          <slot name="content-mobile"></slot>
        </MobileMainBlockUI>
      </MobilePageUI>
    </div>
	</div>
</template>

<style module lang="scss">
.desktopPage, .tablePage, .mobilePage,
.tableBlock, .mobileBlock {
  display: none;
}

@media screen and (min-width: $screen-xs) and (max-width: $screen-lg) {
  .mobilePage, .mobileBlock {
    display: flex;
  }
}

@media screen and (min-width: $screen-lg) and (max-width: $screen-xl) {
  .tablePage, .tableBlock {
    display: flex;
  }
}

@media screen and (min-width: $screen-xl) {
  .desktopPage {
    display: flex;
  }
}
</style>
