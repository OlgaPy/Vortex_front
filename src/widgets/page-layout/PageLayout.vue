<script setup lang="ts">
import DesktopPageUI from '@/shared/ui/page-ui/DesktopPageUI.vue';
import DesktopAsideBlockUI from '@/shared/ui/block-ui/DesktopAsideBlockUI.vue';
import SiteNavigationPanelWidget from '@/widgets/site-navigation-widget/SiteNavigationPanelWidget.vue';
import DesktopMainBlockUI from '@/shared/ui/block-ui/DesktopMainBlockUI.vue';
import ProfilePanelWidget from '@/widgets/profile-panel-widget/ProfilePanelWidget.vue';
import SiteInfoPanel from '@/widgets/SiteInfoPanel.vue';
import AdInfoPanelWidget from '@/widgets/AdInfoPanelWidget.vue';
import MobilePageUI from '@/shared/ui/page-ui/MobilePageUI.vue';
import HeaderWidget from '@/widgets/HeaderWidget.vue';
import GoToPrevPage from '@/features/GoToPrevPage.vue';
import SidebarNavigationMobileWidget from '@/widgets/SidebarNavigationMobileWidget.vue';
import { useMobileNavigationStore } from '@/shared/stores/MobileNavigationStore';
import HeaderHorizontalPanelUI from '@/shared/ui/HeaderHorizontalPanelUI.vue';
import MobileMainBlockUI from '@/shared/ui/block-ui/MobileMainBlockUI.vue';

const MobileNavigationStore = useMobileNavigationStore();
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
				</DesktopMainBlockUI>

				<DesktopAsideBlockUI>
					<ProfilePanelWidget />
					<SiteInfoPanel />
					<AdInfoPanelWidget />
				</DesktopAsideBlockUI>
			</DesktopPageUI>
		</div>

		<div :class="$style.mobilePage">
			<MobilePageUI>
				<HeaderHorizontalPanelUI>
					<HeaderWidget>
						<template #left-content>
							<GoToPrevPage>
								<slot name="prevPageTitle"></slot>
							</GoToPrevPage>
						</template>
					</HeaderWidget>

					<SidebarNavigationMobileWidget v-if="MobileNavigationStore.showNavigationPage" />
				</HeaderHorizontalPanelUI>

				<MobileMainBlockUI>
					<slot name="content"></slot>
				</MobileMainBlockUI>
			</MobilePageUI>
		</div>
	</div>
</template>

<style module lang="scss">
.desktopPage,
.mobilePage {
	display: none;
}

@media screen and (max-width: $screen-xl) {
	.mobilePage {
		display: flex;
	}
}

@media screen and (min-width: $screen-xl) {
	.desktopPage {
		display: flex;
	}
}
</style>
