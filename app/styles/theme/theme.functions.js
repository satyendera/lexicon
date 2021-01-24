import { BASE_FONT_SIZE as baseFontSize } from './theme.constants';

// eslint-disable-next-line import/prefer-default-export
export const pxToRem = px => `${px / baseFontSize}rem`;
