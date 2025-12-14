const BaseColors = {
  horizonBlue: "#005AE6",
  clearSkies: "#64A5FF",
  seafoamZen: "#A0CDFF",
  clearWords: "#F5F5FA",
  navyGuard: "#003296",
  deepSea: "#00143C",
  gentleSky: "#E1E1E1",
  silverMist: "#C4C4C4",
  oceanicSlate: "#757575",
  duskNavy: "#22262E",
};

const Shades = {
  "00": "00",
  "80": "CC",
  "60": "99",
  "40": "66",
  "20": "33",
};

const getAvailableShades = (colorKey: string) => {
  switch (colorKey) {
    case "clearWords":
    case "deepSea":
    case "oceanicSlate":
    case "duskNavy":
      return null;
    case "gentleSky":
      return Object.keys(Shades).filter((shadeKey) => shadeKey === Shades[60]);
    case "silverMist":
      return Object.keys(Shades).filter(
        (shadeKey) =>
          shadeKey === Shades[80] ||
          shadeKey === Shades[60] ||
          shadeKey === Shades[20],
      );
    default:
      return Object.keys(Shades);
  }
};

type BaseColorsOptions = keyof typeof BaseColors;

type ShadesOptions = keyof typeof Shades;

type ColorsOptions =
  | BaseColorsOptions
  | `${Exclude<BaseColorsOptions, "clearWords" | "deepSea" | "oceanicSlate" | "duskNavy" | "gentleSky">}${Exclude<ShadesOptions, "00" | "40" | "60">}`
  | `${Exclude<BaseColorsOptions, "clearWords" | "deepSea" | "oceanicSlate" | "duskNavy" | "gentleSky" | "silverMist">}${Exclude<ShadesOptions, "00" | "20" | "60" | "80">}`
  | `${Exclude<BaseColorsOptions, "clearWords" | "deepSea" | "oceanicSlate" | "duskNavy">}${Exclude<ShadesOptions, "00" | "20" | "40" | "80">}`;

type ColorsType = {
  [color in ColorsOptions]: string;
};

const getKeyForObject = <Type, Key extends keyof Type>(
  obj: Type,
  key: Key,
): Type[Key] => {
  return obj[key];
};

const getBaseColor = (color: BaseColorsOptions) =>
  getKeyForObject(BaseColors, color);

const getShade = (shade: ShadesOptions) => getKeyForObject(Shades, shade);

export const Colors = Object.keys(BaseColors).reduce((partial, colorKey) => {
  const shades = getAvailableShades(colorKey);
  if (shades) {
    for (const shade of shades) {
      if (shade === Shades["00"]) {
        partial[colorKey as BaseColorsOptions] = getBaseColor(
          colorKey as BaseColorsOptions,
        );
      } else {
        partial[`${colorKey}${shade}` as ColorsOptions] =
          `${getBaseColor(colorKey as BaseColorsOptions)}${getShade(shade as ShadesOptions)}`;
      }
    }
  } else {
    partial[colorKey as BaseColorsOptions] = getBaseColor(
      colorKey as BaseColorsOptions,
    );
  }
  return partial;
}, {} as ColorsType);
