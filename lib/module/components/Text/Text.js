"use strict";

import { Platform } from 'react-native';
import ReactNativeText from "./ReactNativeText.js";
import ReactText from "./ReactText.js";
const Text = params => {
  if (Platform.OS === 'web') {
    return ReactText(params);
  } else {
    return ReactNativeText(params);
  }
};
export default Text;
//# sourceMappingURL=Text.js.map