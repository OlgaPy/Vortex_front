export enum InputType {
	OUTFOCUS = 'outfocus',
	FOCUS = 'focus',
	ERROR = 'error',
	SUCCESSFUL = 'successful'
}

export type Props = {
	type: InputType;
};
