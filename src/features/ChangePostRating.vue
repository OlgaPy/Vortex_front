<script setup lang="ts">
import type {IPost} from "@/entities/post";
import RateDownIcon from '@/shared/assets/icons/RateDownIcon.svg';
import RateUpIcon from '@/shared/assets/icons/RateUpIcon.svg';
import {useInvertedPostActions} from '@/shared/stores/UserSettingsStore';
import IconTextUI from '@/shared/ui/IconTextUI.vue';
import {ref} from 'vue';

const { rating: initialRating } = defineProps<Pick<IPost, 'rating'>>();

const rating = ref<number>(initialRating);
const ratingDecreased = ref<boolean>(false);
const ratingIncreased = ref<boolean>(false);

const inverted = useInvertedPostActions();

const handleRatingRaiseClick = () => {
	if (ratingIncreased.value) {
		rating.value--;
	} else {
		rating.value++;
	}

	if (ratingDecreased.value) {
		rating.value++;
	}

	ratingIncreased.value = !ratingIncreased.value;
	ratingDecreased.value = false;
};

const handleRatingDecreaseClick = () => {
	if (ratingDecreased.value) {
		rating.value++;
	} else {
		rating.value--;
	}

	if (ratingIncreased.value) {
		rating.value--;
	}

	ratingDecreased.value = !ratingDecreased.value;
	ratingIncreased.value = false;
};
</script>

<template>
	<IconTextUI
		:class="[
			$style.container,
			{
				[$style.inverted]: inverted
			}
		]"
	>
		<template #left-icon>
			<button
				:class="$style.ratingButton"
				@click="handleRatingRaiseClick"
				data-type="plus"
				:data-active="ratingIncreased"
			>
				<RateUpIcon :class="$style.icon" />
			</button>
		</template>
		<template #text>
			<span :class="[$style.ratingCount, 'font-text-small']">{{ rating }}</span>
		</template>
		<template #right-icon>
			<button
				:class="$style.ratingButton"
				@click="handleRatingDecreaseClick"
				data-type="minus"
				:data-active="ratingDecreased"
			>
				<RateDownIcon :class="$style.icon" />
			</button>
		</template>
	</IconTextUI>
</template>

<style module>
.container {
	gap: 8px;
}

.inverted {
	flex-direction: row-reverse;
}

.ratingButton {
	display: flex;
	color: var(--color-gray-73);
	background: none;
	border: none;
	cursor: pointer;
	transition:
		opacity 0.3s ease-in-out,
		color 0.3s ease-in-out;
}

.ratingButton:hover {
	opacity: 0.7;
}

.ratingButton[data-type='minus']:hover,
.ratingButton[data-type='minus'][data-active='true'] {
	color: var(--color-red-70);
}

.ratingButton[data-type='plus']:hover,
.ratingButton[data-type='plus'][data-active='true'] {
	color: var(--color-green-42);
}

.icon {
	width: 32px;
	height: 32px;
}
</style>
