import { HTMLProps, ReactNode, useMemo } from 'react';
import { TextTypeStyle } from './ReactNativeText';
import { Colors } from '../../constants/Colors';

export interface ReactTextProps extends HTMLProps<HTMLElement> {
  textTypeStyle?: keyof typeof TextTypeStyle;
  children: ReactNode;
}

const ReactText = ({
  children,
  textTypeStyle = 'body1',
  style,
  ...rest
}: ReactTextProps) => {
  const textStyle = useMemo(
    () => ({
      color: Colors.duskNavy,
      ...TextTypeStyle[textTypeStyle],
      ...style,
    }),
    [textTypeStyle, style],
  );

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

  return (
    <Component style={textStyle} {...rest}>
      {children}
    </Component>
  );
};

export default ReactText;
