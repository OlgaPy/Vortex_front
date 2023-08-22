<script setup lang="ts">
import SharePost from '@/features/SharePost.vue'
import ChangePostRating from '@/features/ChangePostRating.vue'
import CommentsLinkUI from '@/widgets/trends-feed-widget/ui/CommentsLinkUI.vue'
import SavePostToFavorites from '@/features/SavePostToFavorites.vue'
import { useInvertedPostActions } from '@/shared/stores/UserSettingsStore'

const inverted = useInvertedPostActions()
</script>

<template>
	<div
		:class="[
			$style.container,
			{
				[$style.actionsInverted]: inverted
			}
		]"
	>
		<div
			:class="[
				$style.leftSection,
				{
					[$style.actionsInverted]: inverted
				}
			]"
		>
			<ChangePostRating :class="$style.ratingChanger" />
			<CommentsLinkUI />
		</div>
		<div
			:class="[
				$style.rightSection,
				{
					[$style.actionsInverted]: inverted
				}
			]"
		>
			<SavePostToFavorites />
			<SharePost />
		</div>
	</div>
</template>

<style module>
.container {
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	font: var(--font-tags);
}

.actionsInverted {
	flex-direction: row-reverse;
}

.ratingChanger {
	width: 111px;
}

.leftSection,
.rightSection {
	display: flex;
	align-items: center;
	gap: 24px;
	height: 24px;
}
</style>
