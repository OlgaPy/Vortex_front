<script setup lang="ts">
import ToggleGlobalThemeFeature from '@/features/ToggleGlobalThemeFeature.vue';
import TogglePostActionsDirection from '@/features/TogglePostActionsDirection.vue';
import {SearchInputUI} from '@/shared/ui/search-input-ui';
import {ref} from 'vue';

const searchText = ref<string>('');
</script>

<template>
	<fieldset>
		<label>App features</label>

		<ToggleGlobalThemeFeature />
		<TogglePostActionsDirection />
		<SearchInputUI v-model="searchText" placeholder="Найти пост" />
	</fieldset>
</template>

<style scoped></style>
