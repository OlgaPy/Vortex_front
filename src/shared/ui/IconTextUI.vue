<template>
	<div :class="$style.container">
		<slot name="left-icon"></slot>
		<slot name="text"></slot>
		<slot name="right-icon"></slot>
	</div>
</template>

<style module>
.container {
	display: flex;
	justify-items: center;
	align-items: center;
	gap: 4px;
}
</style>
