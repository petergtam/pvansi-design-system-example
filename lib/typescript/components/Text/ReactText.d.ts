import { HTMLProps, ReactNode } from 'react';
import { TextTypeStyle } from './ReactNativeText';
export interface ReactTextProps extends HTMLProps<HTMLElement> {
    textTypeStyle?: keyof typeof TextTypeStyle;
    children: ReactNode;
}
declare const ReactText: ({ children, textTypeStyle, style, ...rest }: ReactTextProps) => import("react").JSX.Element;
export default ReactText;
//# sourceMappingURL=ReactText.d.ts.map