<script setup>
import ProfilePanelWidget from '@/widgets/ProfilePanelWidget.vue';
import {SiteNavigationPanelWidget} from '@/widgets/SiteNavigationPanelWidget';
import TrendsFeedWidget from '@/widgets/TrendsFeedWidget.vue';
import AdInfoPanelWidget from '@/widgets/AdInfoPanelWidget.vue';
import SiteInfoPanel from '@/widgets/SiteInfoPanel.vue';
</script>

<template>
  <div :class="$style.page">
    <aside :class="$style.sidebar">
      <SiteNavigationPanelWidget :class="$style.siteNavigationPanel"/>
      <AdInfoPanelWidget :class="$style.adInfoPanel"/>
    </aside>
    <main :class="$style.main">
      <TrendsFeedWidget/>
    </main>
    <aside :class="$style.sidebar">
      <ProfilePanelWidget :class="$style.profilePanelWidget"/>
      <SiteInfoPanel :class="$style.siteInfoPanel"/>
    </aside>
  </div>
</template>

<style module>
.page {
  padding-top: 32px;
  display: flex;
  justify-content: center;
  align-items: start;
  width: 100%;
  height: 100%;
  gap: 32px;
  background: var(--ui-main-color);
  color: var(--ui-primary-color);
}
.sidebar, .main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 300px;
}
.main {
  width: 700px;
}

.siteNavigationPanel, .adInfoPanel,
.profilePanelWidget, .siteInfoPanel {
  margin-bottom: 32px;
}
</style>