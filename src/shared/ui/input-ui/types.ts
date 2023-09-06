export enum FieldStates {
	NONE = '',
	ERROR = 'error',
	SUCCESSFUL = 'successful'
}

export enum FieldFocusStates {
	NONE = '',
	FOCUS = 'focus'
}

export type FieldValueError = string;

export type ValidationResult = {
	errors: FieldValueError[] | null;
};

export type Validator = (value: string | null) => ValidationResult;

export type Emits = {
	(e: 'update:modelValue', value: string | null): void;
	(e: 'removeValue'): void;
};

export type InputProps = {
	modelValue: string;
	label: string;
	placeholder?: string;
	hideText?: boolean;
	showHint?: boolean;
	validators?: Validator[];
	errors?: FieldValueError[];
};

export type TextAreaProps = {
	modelValue: string | null;
};
