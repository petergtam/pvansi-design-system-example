import React, { ReactNode, useMemo } from 'react';
import { Text, TextProps } from 'react-native';
import { Colors, Typography } from '../../constants';

export const TextTypeStyle = {
  none: undefined,
  h1: Typography.h1,
  h2: Typography.h2,
  h3: Typography.h3,
  h4: Typography.h4,
  h5: Typography.h5,
  h6: Typography.h6,
  subtitle1: Typography.subtitle1,
  subtitle2: Typography.subtitle2,
  body1: Typography.body1,
  body2: Typography.body2,
  button: Typography.button,
  caption: Typography.caption,
};

export interface ReactNativeTextProps extends TextProps {
  textTypeStyle?: keyof typeof TextTypeStyle;
  children: ReactNode;
}

const ReactNativeText = ({
  children,
  textTypeStyle = 'body1',
  style,
  ...textProps
}: ReactNativeTextProps) => {
  const textStyle = useMemo(
    () => ({
      color: Colors.duskNavy,
      ...TextTypeStyle[textTypeStyle],
      ...style,
    }),
    [textTypeStyle, style],
  );
  return (
    <Text style={textStyle} {...textProps}>
      {children}
    </Text>
  );
};

export default ReactNativeText;
