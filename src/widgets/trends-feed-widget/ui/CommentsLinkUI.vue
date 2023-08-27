<script setup lang="ts">
import IconTextUI from '@/shared/ui/IconTextUI.vue'
import CommentIcon from '@/shared/assets/icons/CommentIcon.svg'
</script>

<template>
	<router-link to="/all">
		<IconTextUI :class="$style.commentsLink">
			<template #left-icon><CommentIcon :class="$style.commentsIcon" /></template>
			<template #text>
				<span>1516</span>
			</template>
		</IconTextUI>
	</router-link>
</template>

<style module>
.commentsLink {
	gap: 4px;
}
.commentsIcon {
	width: 24px;
	height: 24px;
}
</style>
