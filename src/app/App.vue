<template>
	<div :class="$style.container">
		<RouterView />
	</div>
</template>

<style lang="scss" module>
.container {
	display: block;
	position: relative;
	height: 100%;
}
</style>
