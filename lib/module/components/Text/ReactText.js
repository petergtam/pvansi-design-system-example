"use strict";

import { useMemo } from 'react';
import { TextTypeStyle } from "./ReactNativeText.js";
import { Colors } from "../../constants/Colors.js";
import { jsx as _jsx } from "react/jsx-runtime";
const ReactText = ({
  children,
  textTypeStyle = 'body1',
  style,
  ...rest
}) => {
  const textStyle = useMemo(() => ({
    color: Colors.duskNavy,
    ...TextTypeStyle[textTypeStyle],
    ...style
  }), [textTypeStyle, style]);
  const Component = useMemo(() => {
    switch (textTypeStyle) {
      case 'h1':
      case 'h2':
      case 'h3':
      case 'h4':
      case 'h5':
      case 'h6':
        return textTypeStyle;
      case 'none':
        return 'div';
      default:
        return 'p';
    }
  }, [textTypeStyle]);
  return /*#__PURE__*/_jsx(Component, {
    style: textStyle,
    ...rest,
    children: children
  });
};
export default ReactText;
//# sourceMappingURL=ReactText.js.map