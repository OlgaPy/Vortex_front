<template>
	<div :class="$style.container">
		<router-link :class="$style.profile" to="/all">
			<img src="./icons/userpic.svg" alt="Аватар" />
			<span :class="$style.nickname">Username</span>
		</router-link>
		<slot :class="$style.action" name="action"></slot>
	</div>
</template>

<style module>
.container {
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 48px;
	width: 100%;
	gap: 8px;
}
.profile {
	display: flex;
	justify-content: start;
	align-items: center;
	gap: 8px;
}
.nickname {
	font: var(--font-text);
	font-weight: bold;
	color: var(--color-gray-22);
}
</style>
<script setup lang="ts"></script>
