import React, { useMemo } from "react";
import { Platform, Text, TextProps, TextStyle } from "react-native";
import { Colors } from "../Colors";

interface TextStyleObject extends TextStyle {}

export type TextTypeStyleType = {
  none: undefined;
  h1: TextStyleObject;
  h2: TextStyleObject;
  h3: TextStyleObject;
  h4: TextStyleObject;
  h5: TextStyleObject;
  h6: TextStyleObject;
  subtitle1: TextStyleObject;
  subtitle2: TextStyleObject;
  body1: TextStyleObject;
  body2: TextStyleObject;
  button: TextStyleObject;
  caption: TextStyleObject;
};

export const TextTypeStyle: TextTypeStyleType = {
  none: undefined,
  h1: {
    fontFamily: "Poppins-Light",
    fontWeight: "300",
    fontSize: 93,
    letterSpacing: -1.5,
    textTransform: undefined,
  },
  h2: {
    fontFamily: "Poppins-Light",
    fontWeight: "300",
    fontSize: 58,
    letterSpacing: -0.5,
    textTransform: undefined,
  },
  h3: {
    fontFamily: "Poppins-Regular",
    fontWeight: "400",
    fontSize: 46,
    letterSpacing: 0,
    textTransform: undefined,
  },
  h4: {
    fontFamily: "Poppins-Regular",
    fontWeight: "400",
    fontSize: 33,
    letterSpacing: 0.25,
    textTransform: undefined,
  },
  h5: {
    fontFamily: "Poppins-Regular",
    fontWeight: "400",
    fontSize: 23,
    letterSpacing: 0,
    textTransform: undefined,
  },
  h6: {
    fontFamily: "Poppins-Medium",
    fontWeight: "500",
    fontSize: 19,
    letterSpacing: 0.15,
    textTransform: undefined,
  },
  subtitle1: {
    fontFamily: "Poppins-Regular",
    fontWeight: "400",
    fontSize: 15,
    letterSpacing: 0.15,
    textTransform: undefined,
  },
  subtitle2: {
    fontFamily: "Poppins-Medium",
    fontWeight: "500",
    fontSize: 13,
    letterSpacing: 0.1,
    textTransform: undefined,
  },
  body1: {
    fontFamily: "Poppins-Regular",
    fontWeight: "400",
    fontSize: 15,
    letterSpacing: 0.5,
    textTransform: undefined,
  },
  body2: {
    fontFamily: "Poppins-Regular",
    fontWeight: "400",
    fontSize: 13,
    letterSpacing: 0.25,
    textTransform: undefined,
  },
  button: {
    fontFamily: "Poppins-Medium",
    fontWeight: "500",
    fontSize: 13,
    letterSpacing: 1.25,
    textTransform: Platform.select({ android: "uppercase", default: "none" }),
  },
  caption: {
    fontFamily: "Poppins-Regular",
    fontWeight: "400",
    fontSize: 12,
    letterSpacing: 0.4,
    textTransform: undefined,
  },
};

export interface ReactNativeTextProps extends TextProps {
  textTypeStyle: keyof TextTypeStyleType;
}

const ReactNativeText = ({
  children,
  textTypeStyle = "body1",
  style,
  ...textProps
}: ReactNativeTextProps) => {
  const textStyle = useMemo(
    () => ({
      fontFamily: TextTypeStyle[textTypeStyle]?.fontFamily,
      fontWeight: TextTypeStyle[textTypeStyle]?.fontWeight,
      fontSize: TextTypeStyle[textTypeStyle]?.fontSize,
      letterSpacing: TextTypeStyle[textTypeStyle]?.letterSpacing,
      textTransform: TextTypeStyle[textTypeStyle]?.textTransform,
      color: Colors.duskNavy,
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
