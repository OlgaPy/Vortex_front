<script setup lang="ts">

import SharePost from "@/features/SharePost.vue";
import ChangePostRating from "@/features/ChangePostRating.vue";
import CommentsLinkUI from "@/widgets/trends-feed-widget/ui/CommentsLinkUI.vue";
import SavePostToFavorites from "@/features/SavePostToFavorites.vue";
</script>

<template>
  <div :class="$style.container">
		<div :class="$style.leftSection">
			<ChangePostRating :class="$style.ratingChanger"/>
			<CommentsLinkUI/>
		</div>
    <div :class="$style.rightSection">
      <SavePostToFavorites/>
      <SharePost/>
    </div>
  </div>
</template>

<style module>
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
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
