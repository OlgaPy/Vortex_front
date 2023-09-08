<script setup lang="ts">
import {useProfileStore} from "@/entities/profile/model/ProfileStore";
import {useMobileNavigationStore} from '@/shared/stores/MobileNavigationStore';
import DesktopAsideColumnUI from '@/shared/ui/block-ui/columns/DesktopAsideColumnUI.vue';
import DesktopCentralColumnUI from '@/shared/ui/block-ui/columns/DesktopCentralColumnUI.vue';
import StickyPanelUI from '@/shared/ui/block-ui/panels/StickyPanelUI.vue';
import MobileCentralColumn from '@/shared/ui/block-ui/columns/MobileCentralColumn.vue';
import DesktopPageUI from '@/shared/ui/page-ui/DesktopPageUI.vue';
import MobilePageUI from '@/shared/ui/page-ui/MobilePageUI.vue';
import AdBlockWidget from '@/widgets/AdBlockWidget.vue';
import AuthWidget from "@/widgets/auth-widget/AuthWidget.vue";
import HeaderWidget from '@/widgets/HeaderWidget.vue';
import ModerationBlockWidget from "@/widgets/ModerationBlockWidget.vue";
import ProfilePanelWidget from '@/widgets/profile-panel-widget/ProfilePanelWidget.vue';
import SidebarNavigationMobileWidget from '@/widgets/SidebarNavigationMobileWidget.vue';
import SiteNavigationPanelWidget from '@/widgets/site-navigation-widget/SiteNavigationPanelWidget.vue';
import LinksBlockWidget from '@/widgets/LinksBlockWidget.vue';

//TODO move component to right place

const MobileNavigationStore = useMobileNavigationStore();
const profileStore = useProfileStore();

const siteNavigationLinks = [
  { name: 'Помощь и поддержка', path: '/404' },
  { name: 'О проекте', path: '/404' },
  { name: 'Новости проекта', path: '/404' },
  { name: 'Правила сообщества', path: '/404' },
  { name: 'Контакты', path: '/404' }
];
</script>

<template>
	<div>
		<div :class="$style.desktopPage">
			<DesktopPageUI>
				<DesktopAsideColumnUI>
					<SiteNavigationPanelWidget />
				</DesktopAsideColumnUI>

				<DesktopCentralColumnUI>
          <slot name="content"></slot>
					<slot name="content-desktop"></slot>
				</DesktopCentralColumnUI>

				<DesktopAsideColumnUI>
          <ProfilePanelWidget v-if="profileStore.isAuth()" />
          <AuthWidget v-else />
					<LinksBlockWidget :routes="siteNavigationLinks" />
					<AdBlockWidget />
					<ModerationBlockWidget />
				</DesktopAsideColumnUI>
			</DesktopPageUI>
		</div>

    <div :class="[$style.tablePage, $style.mobilePage]">
      <MobilePageUI>
        <StickyPanelUI>
          <slot name="header-mobile">
            <HeaderWidget />
          </slot>
          <SidebarNavigationMobileWidget v-if="MobileNavigationStore.showNavigationPage" />
        </StickyPanelUI>

        <MobileCentralColumn :class="$style.tableBlock">
          <slot name="content"></slot>
          <slot name="content-table"></slot>
        </MobileCentralColumn>

        <MobileCentralColumn :class="$style.mobileBlock">
          <slot name="content"></slot>
          <slot name="content-mobile"></slot>
        </MobileCentralColumn>
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
