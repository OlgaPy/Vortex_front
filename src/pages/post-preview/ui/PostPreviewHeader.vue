<template>
	<div :class="$style.container">
		<h3 :class="$style.title">Предпросмотр поста</h3>
		<p :class="$style.text">Так будет выглядеть ваш пост, внимательно проверьте его.</p>
	</div>
</template>

<style module lang="scss">
.container {
	width: 100%;
	margin-bottom: 32px;
	padding: 30px;
	background-color: var(--color-gray-98);
	border-radius: var(--style-radius-10);
	color: var(--color-gray-22);
}

.title {
	font: var(--font-sub-title-bold);
	margin-bottom: 30px;
}

.text {
	font: var(--font-text);
}

@media screen and (max-width: $screen-xl) {
	.container {
		background-color: transparent;
		margin-bottom: 24px;
		padding: 20px 12px;
	}

	.title {
		display: none;
	}
}
</style>
