export enum InputStates {
	NONE = '',
	ERROR = 'error',
	SUCCESSFUL = 'successful',
}

export enum InputFocusStates {
	NONE = '',
	FOCUS = 'focus',
}

export type ValidationResult = {
	errors: string[] | null,
} | null;

export type Validator = (value: string | null) => ValidationResult;

export type Props = {
	modelValue: string,
	label: string,
	placeholder?: string,
	hideText?: boolean,
	showHint?: boolean,
	validators?: Validator[],
}

export type Emits = {
	(e: 'update:modelValue', value: string | null): void
}
