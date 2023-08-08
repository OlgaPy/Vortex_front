<script setup lang="ts">
import ProfilePanelWidget from '@/widgets/ProfilePanelWidget.vue';
import SiteNavigationPanelWidget from '@/widgets/SiteNavigationPanelWidget.vue';
import TrendsFeedWidget from '@/widgets/TrendsFeedWidget.vue';
import AdInfoPanelWidget from '@/widgets/AdInfoPanelWidget.vue';
import SiteInfoPanel from '@/widgets/SiteInfoPanel.vue';
</script>

<template>
  <div class="page">
    <aside class="sidebar left-sidebar">
      <SiteNavigationPanelWidget class="site-navigation-panel"/>
      <AdInfoPanelWidget class="ad-info-panel"/>
    </aside>
    <main class="main">
      <TrendsFeedWidget/>
    </main>
    <aside class="sidebar right-sidebar">
      <ProfilePanelWidget class="profile-panel-widget"/>
      <SiteInfoPanel class="site-info-panel"/>
    </aside>
  </div>
</template>

<style lang="scss" scoped>
.page {
  padding-top: 32px;
  display: flex;
  justify-content: center;
  align-items: start;
  width: 100%;
  height: 100%;
  gap: 32px;
  background: var(--ui-bg-color);
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

.site-navigation-panel, .ad-info-panel,
.profile-panel-widget, .profile-panel-widget {
  margin-bottom: 32px;
}
</style>