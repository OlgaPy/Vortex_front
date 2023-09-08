export enum IconSizes {
    TEN = 'ten',
    TWELVE = 'twelve',
    SIXTEEN = 'sixteen',
    EIGHTEEN = 'eighteen',
    TWENTY_FOUR = 'twentyFour',
    THIRTY_TWO = 'thirtyTwo',
}

export type IconProps = {
    size: IconSizes | IconSizes.SIXTEEN
    clickable?: boolean | false
};
