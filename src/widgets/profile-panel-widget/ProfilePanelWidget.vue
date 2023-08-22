<script setup lang="ts">
import PlusIcon from "@/shared/ui/icons/PlusIcon.vue";
import ProfilePreviewUI from "@/entities/profile/ui/ProfilePreviewUI.vue";
import ExitFromProfileFeature from "@/features/ExitFromProfileFeature.vue";
import NotificationTextUI from "@/shared/ui/notification-text-ui/NotificationTextUI.vue";
import RespondIcon from "@/shared/ui/icons/RespondIcon.vue";
import CommentIcon from "@/shared/ui/icons/comment-icon/CommentIcon18.vue";
import SaveIcon from "@/shared/ui/icons/SaveIcon.vue";
import EyeIcon from "@/shared/ui/icons/EyeIcon.vue";
import IgnoreIcon from "@/shared/ui/icons/IgnoreIcon.vue";
import ConfigurationIcon from "@/shared/ui/icons/ConfigurationIcon.vue";
import ExitIcon from "@/shared/ui/icons/ExitIcon.vue";
import ToggleGlobalThemeFeature from "@/features/ToggleGlobalThemeFeature.vue";
</script>

<template>
	<div :class="$style.container">
		<section :class="$style.section">
			<ProfilePreviewUI>
				<template v-slot:action>
					<ToggleGlobalThemeFeature/>
				</template>
			</ProfilePreviewUI>
		</section>
		<section :class="`${$style.section} ${$style.menuSection}`">
			<div :class="$style.menuItem">
				<RespondIcon :class="$style.menuIcon"/>
				<router-link to="/all">Ответы</router-link>
			</div>
			<div :class="$style.menuItem">
				<div :class="$style.notification">
					<div :class="$style.menuItem">
						<CommentIcon :class="$style.menuIcon"/>
						<router-link to="/all">Комментарии</router-link>
					</div>
					<NotificationTextUI :attract="true">10</NotificationTextUI>
				</div>
			</div>
			<div :class="$style.menuItem">
				<SaveIcon :class="$style.menuIcon"/>
				<router-link to="/all">Сохранённое</router-link>
			</div>
			<div :class="$style.menuItem">
				<div :class="$style.notification">
					<div :class="$style.menuItem">
						<EyeIcon :class="$style.menuIcon"/>
						<router-link to="/all">Прочитанное</router-link>
					</div>
					<NotificationTextUI>20</NotificationTextUI>
				</div>
			</div>
			<div :class="$style.menuItem">
				<IgnoreIcon :class="$style.menuIcon"/>
				<router-link to="/all">Чёрный список</router-link>
			</div>
			<div :class="$style.menuItem">
				<ConfigurationIcon :class="$style.menuIcon"/>
				<router-link to="/all">Настройки</router-link>
			</div>
			<div :class="$style.menuItem">
				<ExitIcon :class="$style.menuIcon"/>
				<router-link to="/all">Выход</router-link>
			</div>
		</section>
		<section :class="[$style.section, $style.createPostSection]">
			<div :class="[$style.createPostButton]">
				<PlusIcon :class="$style.menuIcon"/>
				<router-link to="/all">Создать пост</router-link>
			</div>
			<router-link class="font-tags color-primary-1" to="/all">Мои черновики</router-link>
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
	background: var(--color-gray-98);
	font: var(--font-text);
	color: var(--color-gray-22);
	border-radius: 10px;
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
	cursor: pointer;
}
.menuIcon {
	width: 16px;
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
</style>
