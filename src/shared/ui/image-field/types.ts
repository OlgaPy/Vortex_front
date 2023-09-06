export type ImageFieldEmits = {
    (e: 'imageRemoved'): void;
};

export type ImageFieldProps = {
    src?: string | null
    openImmediately?: boolean | false
};
