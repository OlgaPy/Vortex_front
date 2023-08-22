<script setup lang="ts"></script>

<template>
	<div :class="[$style.page, 'color-bg-base-bg']">
		<slot></slot>
	</div>
</template>

<style module>
.page {
	padding-top: 32px;
	display: flex;
	justify-content: center;
	align-items: start;
	width: 100%;
	height: 100%;
	gap: 32px;
}
</style>
