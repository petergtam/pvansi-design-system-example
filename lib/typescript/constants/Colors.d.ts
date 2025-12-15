declare const BaseColors: {
    horizonBlue: string;
    clearSkies: string;
    seafoamZen: string;
    clearWords: string;
    navyGuard: string;
    deepSea: string;
    gentleSky: string;
    silverMist: string;
    oceanicSlate: string;
    duskNavy: string;
};
declare const Shades: {
    '00': string;
    '80': string;
    '60': string;
    '40': string;
    '20': string;
};
type BaseColorsOptions = keyof typeof BaseColors;
type ShadesOptions = keyof typeof Shades;
type ColorsOptions = BaseColorsOptions | `${Exclude<BaseColorsOptions, 'clearWords' | 'deepSea' | 'oceanicSlate' | 'duskNavy' | 'gentleSky'>}${Exclude<ShadesOptions, '00' | '40' | '60'>}` | `${Exclude<BaseColorsOptions, 'clearWords' | 'deepSea' | 'oceanicSlate' | 'duskNavy' | 'gentleSky' | 'silverMist'>}${Exclude<ShadesOptions, '00' | '20' | '60' | '80'>}` | `${Exclude<BaseColorsOptions, 'clearWords' | 'deepSea' | 'oceanicSlate' | 'duskNavy'>}${Exclude<ShadesOptions, '00' | '20' | '40' | '80'>}`;
type ColorsType = {
    [color in ColorsOptions]: string;
};
export declare const Colors: ColorsType;
export {};
//# sourceMappingURL=Colors.d.ts.map