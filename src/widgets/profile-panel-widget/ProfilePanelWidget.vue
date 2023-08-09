<script setup>
import {ProfilePreviewUI} from "@/entities";
import {IconTextUI, NotificationTextUI, ButtonUI} from "@/shared";
import IconConfiguration from "./icons/IconConfiguration.vue";
import IconRespond from "./icons/IconRespond.vue";
import IconComment from "./icons/IconComment.vue";
import IconSave from "./icons/IconSave.vue";
import IconIgnore from "./icons/IconIgnore.vue";
import IconPLus from "./icons/IconPLus.vue";
import IconEye from "./icons/IconEye.vue";
import {ExitFromProfileFeature} from "@/features";
</script>

<template>
  <div :class="$style.container">
    <section :class="$style.section">
      <ProfilePreviewUI>
        <template v-slot:action>
          <ExitFromProfileFeature/>
        </template>
      </ProfilePreviewUI>
    </section>
    <section :class="`${$style.section} ${$style.menuSection}`">
      <div :class="$style.menuItem">
        <IconTextUI>
          <template #icon>
            <IconConfiguration/>
          </template>
          <template #text>Настройки</template>
        </IconTextUI>
      </div>
      <div :class="$style.menuItem">
        <IconTextUI>
          <template #icon>
            <IconRespond/>
          </template>
          <template #text>Ответы</template>
        </IconTextUI>
        <NotificationTextUI :count="10" :attract="true"/>
      </div>
      <div :class="$style.menuItem">
        <IconTextUI>
          <template #icon>
            <IconComment/>
          </template>
          <template #text>Комментарии</template>
        </IconTextUI>
      </div>
      <div :class="$style.menuItem">
        <IconTextUI>
          <template #icon>
            <IconSave/>
          </template>
          <template #text>Сохранённое</template>
        </IconTextUI>
        <NotificationTextUI :count="10"/>
      </div>
      <div :class="$style.menuItem">
        <IconTextUI>
          <template #icon>
            <IconEye/>
          </template>
          <template #text>Просмотренное</template>
        </IconTextUI>
      </div>
      <div :class="$style.menuItem">
        <IconTextUI>
          <template #icon>
            <IconIgnore/>
          </template>
          <template #text>Игнор-лист</template>
        </IconTextUI>
      </div>
    </section>
    <section :class="$style.section">
      <ButtonUI :class="$style.createPostButton">
        <IconTextUI>
          <template #icon>
            <IconPLus/>
          </template>
          <template #text>Создать пост</template>
        </IconTextUI>
      </ButtonUI>
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
  background: var(--ui-sub-main-color);
  border-radius: 10px;
  width: 100%;
  height: 450px;
}

.section {
  margin-bottom: 32px;
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
.menuItem {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.menuItem:hover {
  cursor: pointer;
  color: var(--ui-accent-color);
}

.createPostButton {
  display: flex;
  width: 100%;
  height: 48px;
  color: white;
}
</style>