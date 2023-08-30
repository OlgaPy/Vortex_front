export type Props = {
	modelValue: boolean;
};

export type Emits = {
	(e: 'update:modelValue', value: boolean): void;
};
