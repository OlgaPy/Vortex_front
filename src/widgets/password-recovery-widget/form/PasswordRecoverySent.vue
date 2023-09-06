<template>
	<div :class="$style.container">
		<div :class="$style.header">
			<h3 :class="$style.title">Восстановление пароля</h3>
            <slot name="header"></slot>
		</div>
        <span :class="$style.sent">
            Мы отправили письмо с инструкцией на указанный адрес электронной почты. 
        </span>
    <slot name="button" />
    </div>
</template>

<style module>
.container {
    padding: 32px;
    display: flex;
    flex-direction: column;
}

.header {
	display: flex;
	gap: 10px;
    margin-bottom: 32px;
    justify-content: space-between;
}

.sent {
    font: var(--font-sub-title); 
    color: var(--color-gray-22);
    display: block;
    margin-bottom: 32px;
}
.title {
	font-size: 18px;
	font-weight: 700;
	line-height: 24px;
	letter-spacing: 0px;
    font: var(--font-sub-title-bold);
}
</style>
