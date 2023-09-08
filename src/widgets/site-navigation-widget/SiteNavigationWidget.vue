<script setup lang="ts">
import {FeedTypes} from "@/entities/posts-feed/config/feed-types";
import ElongatedBlockUI from "@/shared/ui/block-ui/blocks/ElongatedBlockUI.vue";
import {SearchInputUI} from '@/shared/ui/search-input-ui';
import {RouteRecordRaw} from "vue-router";

export type SiteNavigationWidgetProps = {
  links: RouteRecordRaw[],
};

const {links} = defineProps<SiteNavigationWidgetProps>();
</script>

<template>
	<ElongatedBlockUI>
		<section :class="`${$style.section} ${$style.logoSection}`">
			<router-link to="/">
				<img
					:class="[$style.logo, $style.darkLogo]"
					src="./img/dark-color-logo.svg"
					alt="Капибара лого"
				/>
				<img
					:class="[$style.logo, $style.lightLogo]"
					src="./img/white-color-logo.svg"
					alt="Капибара лого"
				/>
			</router-link>
		</section>
		<section :class="`${$style.section} ${$style.menuSection}`">
      <router-link
          v-for="(route, index) in links"
          :key="index"
          :to="route.path"
          :active-class="$style.activeLink"
      >
        {{ route.name }}
      </router-link>
		</section>
		<section :class="`${$style.section} ${$style.searchSection}`">
			<SearchInputUI model-value="" placeholder="Найти пост..." />
		</section>
  </ElongatedBlockUI>
</template>

<style lang="scss" module>
.section {
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 24px;
}
.logoSection {
	width: 268px;
	height: 54px;
}
.menuSection {
	justify-content: center;
	align-items: end;
	flex-direction: column;
	width: 100%;
	font: var(--font-sub-title);
	color: var(--color-gray-22);
}
.menuSection > * {
	padding-left: 16px;
	display: flex;
	justify-self: center;
	align-items: center;
	height: 40px;
	width: 312px;
}

.logo {
	display: none;
}
//TODO import color-schemas
[data-color-schema='dark'] .lightLogo,
[data-color-schema='light'] .darkLogo,
[data-color-schema='auto'] .darkLogo {
	display: block;
}

.activeLink {
	font-weight: 600;
}
.menuSection > *:hover,
.activeLink {
	background: var(--color-gray-95);
	border-radius: var(--style-radius-5) 0 0 var(--style-radius-5);
	cursor: pointer;
}
.searchSection {
	width: 264px;
	height: 40px;
}
</style>
>
