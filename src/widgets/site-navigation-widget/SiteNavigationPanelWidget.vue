<script setup lang="ts">
import { SearchInputUI } from '@/shared/ui/search-input-ui'
</script>

<template>
	<div :class="$style.container">
		<section :class="`${$style.section} ${$style.logoSection}`">
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
		</section>
		<section :class="`${$style.section} ${$style.menuSection}`">
			<router-link to="/" :active-class="$style.activeLink">Тренды</router-link>
			<router-link to="/all" :active-class="$style.activeLink">Новое</router-link>
			<router-link to="/all" :active-class="$style.activeLink">Топ</router-link>
			<router-link to="/all" :active-class="$style.activeLink">Обсуждаемое</router-link>
			<router-link to="/all" :active-class="$style.activeLink">Подписки</router-link>
			<router-link to="/all" :active-class="$style.activeLink">Группы</router-link>
			<router-link to="/all" :active-class="$style.activeLink">Авторское</router-link>
			<router-link to="/all" :active-class="$style.activeLink">Теги</router-link>
		</section>
		<section :class="`${$style.section} ${$style.searchSection}`">
			<SearchInputUI model-value="" placeholder="Найти пост..." />
		</section>
	</div>
</template>

<style lang="scss" module>
.container {
	padding: 32px 0;
	display: flex;
	justify-content: start;
	align-items: center;
	flex-direction: column;
	background: var(--color-gray-98);
	border-radius: var(--style-radius-10);
	width: 300px;
}
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
	width: 284px;
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
	width: 236px;
	height: 40px;
}
</style>
>
