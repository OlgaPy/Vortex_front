export type ValidationResult = {
	errors: string[] | null,
} | null;

export type Validator = (modelValue: string) => ValidationResult;

export type Props = {
	modelValue: string,
	label: string
	hideText?: boolean,
	showHint?: boolean,
	validators?: Validator[],
}

export type Emits = {
	(e: 'update:modelValue', value: string): void
}
