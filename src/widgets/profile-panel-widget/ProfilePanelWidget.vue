<script setup lang="ts">
import ProfilePreviewUI from '@/entities/profile/ui/ProfilePreviewUI.vue';
import ToggleGlobalThemeFeature from '@/features/ToggleGlobalThemeFeature.vue';
import CommentIcon from '@/shared/assets/icons/CommentIcon.svg';
import ConfigurationIcon from '@/shared/assets/icons/ConfigurationIcon.svg';
import ExitIcon from '@/shared/assets/icons/ExitIcon.svg';
import EyeIcon from '@/shared/assets/icons/EyeIcon.svg';
import IgnoreIcon from '@/shared/assets/icons/IgnoreIcon.svg';
import PlusIcon from '@/shared/assets/icons/PlusIcon.svg';
import RespondIcon from '@/shared/assets/icons/RespondIcon.svg';
import SaveIcon from '@/shared/assets/icons/SaveIcon.svg';
import NotificationTextUI from '@/shared/ui/notification-text-ui/NotificationTextUI.vue';
</script>

<template>
	<div :class="$style.container">
		<section :class="$style.section">
			<ProfilePreviewUI>
				<template v-slot:action>
					<ToggleGlobalThemeFeature />
				</template>
			</ProfilePreviewUI>
		</section>
		<section :class="`${$style.section} ${$style.menuSection}`">
			<div :class="$style.menuItem">
				<RespondIcon :class="[$style.menuIcon, $style.replyIcon]" />
				<router-link to="/404">Ответы</router-link>
			</div>
			<div :class="$style.menuItem">
				<div :class="$style.notification">
					<div :class="$style.menuItem">
						<CommentIcon :class="[$style.menuIcon, $style.commentsIcon]" />
						<router-link to="/404">Комментарии</router-link>
					</div>
					<NotificationTextUI :attract="true">10</NotificationTextUI>
				</div>
			</div>
			<div :class="$style.menuItem">
				<SaveIcon :class="[$style.menuIcon, $style.savesIcon]" />
				<router-link to="/404">Сохранённое</router-link>
			</div>
			<div :class="$style.menuItem">
				<div :class="$style.notification">
					<div :class="$style.menuItem">
						<EyeIcon :class="[$style.menuIcon, $style.eyeIcon]" />
						<router-link to="/404">Прочитанное</router-link>
					</div>
					<NotificationTextUI>20</NotificationTextUI>
				</div>
			</div>
			<div :class="$style.menuItem">
				<IgnoreIcon :class="$style.menuIcon" />
				<router-link to="/404">Чёрный список</router-link>
			</div>
			<div :class="$style.menuItem">
				<ConfigurationIcon :class="$style.menuIcon" />
				<router-link to="/404">Настройки</router-link>
			</div>
			<div :class="$style.menuItem">
				<ExitIcon :class="$style.menuIcon" />
				<router-link to="/404">Выход</router-link>
			</div>
		</section>
		<section :class="[$style.section, $style.createPostSection]">
			<div :class="[$style.createPostButton]">
				<PlusIcon :class="$style.createPostIcon" />
				<router-link to="/404">Создать пост</router-link>
			</div>
			<router-link class="font-small color-primary-1" to="/404">Мои черновики</router-link>
		</section>
	</div>
</template>

<style module>
.container {
	padding: 32px;
	display: flex;
	justify-content: start;
	align-items: center;
	flex-direction: column;
	background-color: var(--color-gray-98);
	font: var(--font-text);
	color: var(--color-gray-22);
	border-radius: var(--style-radius-10);
	width: 100%;
	gap: 32px;
}

.section {
	display: flex;
	justify-items: start;
	align-items: center;
	width: 100%;
}
.menuSection {
	align-items: start;
	flex-direction: column;
	gap: 16px;
}
.createPostSection {
	align-items: center;
	flex-direction: column;
	gap: 32px;
}

.menuItem {
	display: flex;
	justify-content: start;
	align-items: center;
	width: 100%;
	height: 24px;
	gap: 8px;
}
.menuItem:hover {
	color: var(--color-primary-1);
	cursor: pointer;
}
.menuIcon {
	width: 16px;
	height: 16px;
	color: var(--color-gray-53);
}

.replyIcon {
	scale: 1 0.9;
}

.commentsIcon {
	scale: 1.5;
}

.savesIcon {
	scale: 1.35;
}

.eyeIcon {
	scale: 1.1;
}

.notification {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
}

.createPostButton {
	padding: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
	width: 100%;
	height: 40px;
	background-color: var(--color-primary-1);
	color: var(--color-contrast-primary-1);
	border-radius: var(--style-radius-5);
	font: var(--font-text);
}
.createPostIcon {
	width: 12px;
	height: 12px;
	color: var(--color-contrast-primary-1);
}
</style>
