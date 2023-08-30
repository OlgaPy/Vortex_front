<script setup lang="ts">
import TrashIcon from '@/shared/assets/icons/TrashIcon.svg';
import IconButtonUI from '@/shared/ui/icon-button-ui/IconButtonUI.vue';
import SaveIcon from '@/shared/assets/icons/SaveIcon.svg';
import IconEmptyButtonUI from '@/shared/ui/icon-button-ui/IconEmptyButtonUI.vue';
import RateDownIcon from '@/shared/assets/icons/RateDownIcon.svg';
import RateUpIcon from '@/shared/assets/icons/RateUpIcon.svg';
import IconTextButtonUI from '@/shared/ui/icon-button-ui/IconTextButtonUI.vue';
</script>

<template>
	<fieldset>
		<label>IconButtons</label>

		<IconTextButtonUI>
			<template #left-icon>
				<SaveIcon :class="$style.icon" />
			</template>
		</IconTextButtonUI>

		<IconTextButtonUI>
			<template #left-icon>
				<RateDownIcon :class="$style.icon" />
			</template>
			<template #text>Some text</template>
			<template #right-icon>
				<RateUpIcon :class="$style.icon" />
			</template>
		</IconTextButtonUI>

		<IconTextButtonUI>
			<template #right-icon>
				<TrashIcon :class="$style.icon" />
			</template>
		</IconTextButtonUI>

		<IconButtonUI>
			<template #left-icon>
				<SaveIcon :class="$style.icon" />
			</template>
		</IconButtonUI>

		<IconButtonUI>
			<template #left-icon>
				<RateDownIcon :class="$style.icon" />
			</template>
			<template #text>Some text</template>
			<template #right-icon>
				<RateUpIcon :class="$style.icon" />
			</template>
		</IconButtonUI>

		<IconButtonUI>
			<template #right-icon>
				<TrashIcon :class="$style.icon" />
			</template>
		</IconButtonUI>

		<IconEmptyButtonUI>
			<template #left-icon>
				<SaveIcon :class="$style.icon" />
			</template>
		</IconEmptyButtonUI>

		<IconEmptyButtonUI>
			<template #left-icon>
				<RateDownIcon :class="$style.icon" />
			</template>
			<template #text>Some text</template>
			<template #right-icon>
				<RateUpIcon :class="$style.icon" />
			</template>
		</IconEmptyButtonUI>

		<IconEmptyButtonUI>
			<template #right-icon>
				<TrashIcon :class="$style.icon" />
			</template>
		</IconEmptyButtonUI>
	</fieldset>
</template>

<style module>
.icon {
	width: 16px;
	height: 16px;
}
</style>
