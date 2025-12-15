import React, { ReactNode } from 'react';
import { TextProps } from 'react-native';
export declare const TextTypeStyle: {
    none: undefined;
    h1: {
        fontFamily: string;
        fontWeight: "300";
        fontSize: number;
        letterSpacing: number;
    };
    h2: {
        fontFamily: string;
        fontWeight: "300";
        fontSize: number;
        letterSpacing: number;
    };
    h3: {
        fontFamily: string;
        fontWeight: "400";
        fontSize: number;
        letterSpacing: number;
    };
    h4: {
        fontFamily: string;
        fontWeight: "400";
        fontSize: number;
        letterSpacing: number;
    };
    h5: {
        fontFamily: string;
        fontWeight: "400";
        fontSize: number;
        letterSpacing: number;
    };
    h6: {
        fontFamily: string;
        fontWeight: "500";
        fontSize: number;
        letterSpacing: number;
    };
    subtitle1: {
        fontFamily: string;
        fontWeight: "400";
        fontSize: number;
        letterSpacing: number;
    };
    subtitle2: {
        fontFamily: string;
        fontWeight: "500";
        fontSize: number;
        letterSpacing: number;
    };
    body1: {
        fontFamily: string;
        fontWeight: "400";
        fontSize: number;
        letterSpacing: number;
    };
    body2: {
        fontFamily: string;
        fontWeight: "400";
        fontSize: number;
        letterSpacing: number;
    };
    button: {
        fontFamily: string;
        fontWeight: "500";
        fontSize: number;
        letterSpacing: number;
        textTransform: "none" | "uppercase";
    };
    caption: {
        fontFamily: string;
        fontWeight: "400";
        fontSize: number;
        letterSpacing: number;
    };
};
export interface ReactNativeTextProps extends TextProps {
    textTypeStyle?: keyof typeof TextTypeStyle;
    children: ReactNode;
}
declare const ReactNativeText: ({ children, textTypeStyle, style, ...textProps }: ReactNativeTextProps) => React.JSX.Element;
export default ReactNativeText;
//# sourceMappingURL=ReactNativeText.d.ts.map