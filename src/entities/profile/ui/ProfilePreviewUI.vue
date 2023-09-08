<template>
	<div :class="[$style.container, $slots.subTitle && $style.containerWithSubTitle]">
		<div :class="[$style.avatarWrapper, $slots.subTitle && $style.avatarWrapperWithSubTitle]">
			<slot :class="$style.avatar" name="avatar">
				<router-link to="/all">
					<img :class="$style.avatar" src="../../../shared/assets/icons/UserIcon.svg" alt="Аватар" />
				</router-link>
			</slot>
		</div>

		<div :class="[$style.profileInfo, $slots.subTitle && $style.profileInfoWithSubTitle]">
			<slot name="nickname" :class="$style.nickname">
        <router-link to="/all">
					<span :class="$style.nickname">Username</span>
				</router-link>
      </slot>

			<div v-if="$slots.subTitle" :class="$style.subTitleWrapper">
				<slot name="subTitle" :class="$style.subTitle"> </slot>
			</div>
		</div>

		<div :class="$style.action">
			<slot name="action"></slot>
		</div>
	</div>
</template>

<style lang="scss" module>
.avatar {
	height: 100%;
	width: 100%;
	object-fit: contain;
	border-radius: 100%;

	&Wrapper {
		display: flex;
		justify-content: center;
		align-items: center;

		height: 48px;
		width: 48px;

		&WithSubTitle {
			height: 36px;
			width: 36px;
		}
	}
}
.container {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	height: 48px;
	width: 100%;
	gap: 8px;

	&WithSubTitle {
		gap: 16px;
		height: 44px;
	}
}
.profileInfo {
	display: flex;
	flex-direction: column;
	justify-content: center;
	overflow: hidden;
	align-items: start;
	height: 100%;

	&WithSubTitle {
		justify-content: space-between;
	}
}
.nickname {
	font: var(--font-text);
	font-weight: bold;
	color: var(--color-gray-22);
}
.subTitle {
	font: var(--font-sub-title);
	font-size: 1.5rem;
	color: var(--color-gray-53);

	&Wrapper {
		max-width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
}

.action {
	display: flex;
	margin-left: auto;
}
</style>
<script setup lang="ts"></script>
