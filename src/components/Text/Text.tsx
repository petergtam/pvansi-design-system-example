import { Platform } from "react-native";
import ReactNativeText, { ReactNativeTextProps } from "./ReactNativeText";
import ReactText, { ReactTextProps } from "./ReactText";

export type TextProps = ReactNativeTextProps | ReactTextProps;

const Text = (params: TextProps) => {
  if (Platform.OS === "web") {
    return ReactText(params as ReactTextProps);
  } else {
    return ReactNativeText(params as ReactNativeTextProps);
  }
};

export default Text;
