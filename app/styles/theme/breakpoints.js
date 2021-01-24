import { pxToRem } from './theme.functions';

const breakpointValues = {
  xs: { width: 0, containerWidth: 326, containerPadding: 25 },
  sm: { width: 768, containerWidth: 704, containerPadding: 32 },
  md: { width: 1024, containerWidth: 960, containerPadding: 32 },
  lg: { width: 1280, containerWidth: 1216, containerPadding: 32 },
  xl: { width: 1440, containerWidth: 1376, containerPadding: 32 },
};

const breakpoints = {
  keys: ['xs', 'sm', 'md', 'lg', 'xl'],
  up: (key, noMedia) => {
    const type = '@media';
    if (noMedia) {
      return `(min-device-width:${pxToRem(breakpointValues[key].width)})`;
    }
    return `${type} (min-width:${pxToRem(breakpointValues[key].width)})`;
  },
  containerWidth: key =>
    pxToRem(breakpointValues[key].containerWidth + breakpointValues[key].containerPadding * 2),
  containerPadding: key => pxToRem(breakpointValues[key].containerPadding),
  width: key => breakpointValues[key].width,
};

export default breakpoints;
