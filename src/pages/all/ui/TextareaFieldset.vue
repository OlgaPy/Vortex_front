<script setup lang="ts">
import TextareaUI from '@/shared/ui/input-ui/TextareaUI.vue';
import {ref} from "vue";

const value = ref('');
</script>

<template>
	<fieldset>
		<label>Textarea</label>

		<span>//TODO Textarea auto-sizing</span>
		<TextareaUI v-model="value"/>
	</fieldset>
</template>

<style module></style>
