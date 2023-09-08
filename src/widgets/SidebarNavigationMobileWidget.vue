<script setup lang="ts">
import {FeedTypes} from "@/entities/posts-feed/config/feed-types";
import {useMobileNavigationStore} from '@/shared/stores/MobileNavigationStore';
import {useThemeStore} from '@/shared/stores/ThemeStore';
import BugIcon from '@/shared/assets/icons/BugIcon.svg';
import Icon from "@/shared/ui/icon/Icon.vue";
import {IconSizes} from "@/shared/ui/icon/types";
import {SearchInputUI} from '@/shared/ui/search-input-ui';

const MobileNavigationStore = useMobileNavigationStore();
const ThemeStore = useThemeStore();

const navigationLinks = [
	{ name: 'Тренды', path: FeedTypes.TRENDS },
	{ name: 'Новое', path: FeedTypes.NEW },
	{ name: 'Топ', path: FeedTypes.TRENDS },
	{ name: 'Обсуждаемое', path: FeedTypes.DISCUSSED },
	{ name: 'Подписки', path: FeedTypes.SUBSCRIPTIONS },
	{ name: 'Группы', path: '/404' },
	{ name: 'Теги', path: '/404' }
];

const footerLinks = [
	{ name: 'Помощь и поддержка', path: '/404' },
	{ name: 'О проекте', path: '/404' },
	{ name: 'Новости проекта', path: '/404' },
	{ name: 'Правила сообщества', path: '/404' },
	{ name: 'Контакты', path: '/404' }
];
</script>

<template>
	<aside :class="$style.mobileNavigationPage">
		<div :class="$style.navigationPanel">
			<div :class="$style.links">
				<router-link
					v-for="(item, index) in navigationLinks"
					:key="index"
					:class="[
						$style.link,
						{
							[$style.active]: index == 0,
							[$style.activeDark]: ThemeStore.themeMode == 'dark' && index == 0
						}
					]"
					:to="item.path"
				>
					<span>{{ item.name }}</span>
				</router-link>
			</div>
			<div :class="$style.searchBlock">
				<SearchInputUI model-value="" placeholder="Найти пост..." />
			</div>
		</div>
		<div :class="$style.footer">
			<div :class="$style.footerLinks">
        <router-link to="/404" :class="$style.footerLink">
          <Icon :size="IconSizes.SIXTEEN">
            <BugIcon/>
          </Icon>
          <span>Сообщить о багах</span>
        </router-link>
				<router-link
					v-for="(item, index) in footerLinks"
					:class="$style.footerLink"
					:key="index"
					:to="item.path"
				>
					<span>{{ item.name }}</span>
				</router-link>
			</div>
			<div :class="$style.socialLinks">
				<router-link :class="$style.vk" :to="`/all`" />
				<router-link :class="$style.tg" :to="`/all`" />
			</div>
		</div>
	</aside>
	<div @click="MobileNavigationStore.toggleNavigationPage" :class="$style.overlay"></div>
</template>

<style module>
.mobileNavigationPage {
	position: fixed;
	top: 56px;
	left: 0px;
	overflow-y: scroll;
	height: calc(100vh - 56px);
	z-index: 2;
	display: flex;
	flex-direction: column;
	font-weight: 400;
	font-family: var(--font-family-default);
}

.mobileNavigationPage::-webkit-scrollbar {
	display: none;
}

.overlay {
	z-index: 1;
	position: fixed;
	top: 56px;
	left: 0px;
	width: 100%;
	max-width: 100vw;
	height: calc(100vh - 56px);
	background-color: #00000086;
	cursor: pointer;
}

.navigationPanel {
	flex-grow: 1;
	padding: 20px;
	display: flex;
	flex-direction: column;
	gap: 10px;
	background-color: var(--color-gray-98);
	color: var(--color-gray-14);
}

.links {
	display: flex;
	flex-direction: column;
	font-size: 15px;
	line-height: 20px;
}

.link {
	padding: 8px 0;
	cursor: pointer;
}

.active {
	font-weight: 700;
	color: var(--color-primary-2);
}

.activeDark {
	background-color: #000000;
	border-radius: 6px 0px 0px 6px;
}

.searchBlock {
	height: fit-content;
	position: relative;
}

.footer {
	display: flex;
	gap: 20px;
  padding: 20px;
	flex-direction: column;
	background-color: var(--color-gray-95);
}

.footerLinks {
	display: flex;
	gap: 20px;
  flex-direction: column;
  font: var(--font-text);
	color: var(--color-gray-53);
}

.footerLink {
  display: flex;
  justify-content: start;
  align-items: center;
	cursor: pointer;
  gap: 8px;
}

.socialLinks {
	display: flex;
	flex-direction: row;
	gap: 10px;
}

.socialLinks a {
	background-color: rgba(54, 52, 59, 1);
	height: 32px;
	width: 32px;
	background-repeat: no-repeat;
	background-position: center;
	border-radius: 8px;
}

.vk {
	background-image: url('@/shared/assets/icons/SocialVkIcon.svg');
}

.tg {
	background-image: url('@/shared/assets/icons/SocialTgIcon.svg');
}
</style>
