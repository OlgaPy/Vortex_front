export type Option = {
	text: string;
	value: string;
};

export type Props = {
	options: Option[];
	modelValue: Option | null;
	attractorText: string;
};

export type Emits = {
	(e: 'update:modelValue', value: Option): void;
};
