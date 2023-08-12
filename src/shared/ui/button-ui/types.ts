export enum ButtonActivity {
    ACTIVE = 'active',
    INACTIVE = 'inactive',
}
export enum ButtonType {
    FILLED = 'filled',
    DEFAULT = 'default',
    TEXT = 'text',
}

export type Props = {
    activity: ButtonActivity
    type: ButtonType
}