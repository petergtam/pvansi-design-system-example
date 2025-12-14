import { HTMLProps, useMemo } from "react";
import { TextTypeStyle, TextTypeStyleType } from "./ReactNativeText";
import { Colors } from "../../constants/Colors";

export interface ReactTextProps extends HTMLProps<HTMLElement> {
  textTypeStyle?: keyof TextTypeStyleType;
}

const ReactText = ({
  children,
  textTypeStyle = "body1",
  style,
  ...rest
}: ReactTextProps) => {
  const textStyle = useMemo(
    () => ({
      fontFamily: TextTypeStyle[textTypeStyle]?.fontFamily,
      fontSize: TextTypeStyle[textTypeStyle]?.fontSize,
      fontWeight: TextTypeStyle[textTypeStyle]?.fontWeight,
      letterSpacing: TextTypeStyle[textTypeStyle]?.letterSpacing,
      textTransform: TextTypeStyle[textTypeStyle]?.textTransform,
      color: Colors.duskNavy,
      ...style,
    }),
    [textTypeStyle, style],
  );

  const Component = useMemo(() => {
    switch (textTypeStyle) {
      case "h1":
      case "h2":
      case "h3":
      case "h4":
      case "h5":
      case "h6":
        return textTypeStyle;
      case "none":
        return "div";
      default:
        return "p";
    }
  }, [textTypeStyle]);

  return (
    <Component style={textStyle} {...rest}>
      {children}
    </Component>
  );
};

export default ReactText;
