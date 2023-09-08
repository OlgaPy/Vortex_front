<script setup lang="ts">
import PageLayout from "@/pages/PageLayout.vue";
import TrendsFeedWidget from "@/widgets/posts-feed-widget/PostsFeedWidget.vue";
</script>

<template>
  <PageLayout>
    <template #content>
      <TrendsFeedWidget />
    </template>
  </PageLayout>
</template>

<style lang="scss" module>
.homeDesktopPage,
.homeMobilePage {
	display: none;
}

@media screen and (min-width: $screen-xs) and (max-width: $screen-xl) {
	.homeMobilePage {
		display: flex;
	}
}

@media screen and (min-width: $screen-xl) {
	.homeDesktopPage {
		display: flex;
	}
}
</style>
