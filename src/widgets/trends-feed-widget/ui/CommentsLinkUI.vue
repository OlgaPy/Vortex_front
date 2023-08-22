<script setup lang="ts">
import IconTextUI from '@/shared/ui/IconTextUI.vue'
import CommentIcon from '@/shared/ui/icons/comment-icon/CommentIcon24.vue'
</script>

<template>
	<router-link to="/all">
		<IconTextUI :class="$style.commentsLink">
			<template #left-icon><CommentIcon /></template>
			<template #text>
				<span>1516</span>
			</template>
		</IconTextUI>
	</router-link>
</template>

<style module>
.commentsLink {
	width: 79px;
	gap: 4px;
}
</style>
