<script setup lang="ts">
import PreviewPostUI from "@/entities/post/ui/PreviewPostUI.vue";
import TagsList from "@/entities/tag/ui/TagsList.vue";
import PostPreviewFooterUI from "@/widgets/trends-feed-widget/ui/PostPreviewFooterUI.vue";
</script>

<template>
  <PreviewPostUI>
    <template #title>
      Сытно и просто - картофель по-деревенски! 🥔✨
    </template>
    <template #tags>
      <TagsList :tags="['Меню', 'Баян', 'Без рейтинга']"/>
    </template>
    <template #body>
      <div :class="$style.postBody">
        <img src="@/widgets/trends-feed-widget/img/Pictures.png" alt="Post Image">
        <span class="font-text color-gray-22">
          Нарежьте картошку кубиками, посыпьте розмарином, солью и перцем, добавьте немного растительного масла.
          Выпекайте в разогретой духовке до золотистой корки. Этот домашний деликатес прекрасно подходит к мясным
          блюдам или просто с огоньком кетчупа! 🍅🔥
        </span>
      </div>
    </template>
    <template #footer>
      <PostPreviewFooterUI/>
    </template>
  </PreviewPostUI>
</template>

<style module>
.postBody {
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  gap: 10px;
}
</style>
