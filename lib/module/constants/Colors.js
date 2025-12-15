"use strict";

const BaseColors = {
  horizonBlue: '#005AE6',
  clearSkies: '#64A5FF',
  seafoamZen: '#A0CDFF',
  clearWords: '#F5F5FA',
  navyGuard: '#003296',
  deepSea: '#00143C',
  gentleSky: '#E1E1E1',
  silverMist: '#C4C4C4',
  oceanicSlate: '#757575',
  duskNavy: '#22262E'
};
const Shades = {
  '00': '00',
  '80': 'CC',
  '60': '99',
  '40': '66',
  '20': '33'
};
const getAvailableShades = colorKey => {
  switch (colorKey) {
    case 'clearWords':
    case 'deepSea':
    case 'oceanicSlate':
    case 'duskNavy':
      return null;
    case 'gentleSky':
      return Object.keys(Shades).filter(shadeKey => shadeKey === Shades[60]);
    case 'silverMist':
      return Object.keys(Shades).filter(shadeKey => shadeKey === Shades[80] || shadeKey === Shades[60] || shadeKey === Shades[20]);
    default:
      return Object.keys(Shades);
  }
};
const getKeyForObject = (obj, key) => {
  return obj[key];
};
const getBaseColor = color => getKeyForObject(BaseColors, color);
const getShade = shade => getKeyForObject(Shades, shade);
export const Colors = Object.keys(BaseColors).reduce((partial, colorKey) => {
  const shades = getAvailableShades(colorKey);
  if (shades) {
    for (const shade of shades) {
      if (shade === Shades['00']) {
        partial[colorKey] = getBaseColor(colorKey);
      } else {
        partial[`${colorKey}${shade}`] = `${getBaseColor(colorKey)}${getShade(shade)}`;
      }
    }
  } else {
    partial[colorKey] = getBaseColor(colorKey);
  }
  return partial;
}, {});
//# sourceMappingURL=Colors.js.map