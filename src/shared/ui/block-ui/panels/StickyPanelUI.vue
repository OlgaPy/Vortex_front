<script setup lang="ts"></script>

<template>
	<div :class="[$style.container, 'color-bg-gray-98']">
		<slot></slot>
	</div>
</template>

<style module>
.container {
	position: sticky;
	display: flex;
	flex-wrap: wrap;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 1;
}
</style>
