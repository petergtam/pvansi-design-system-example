import { fixupConfigRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import eslintJS from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";

import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

const flatCompat = new FlatCompat();

export default defineConfig([
  eslintPluginPrettierRecommended,
  {
    plugins: { eslintJS },
    extends: ["eslintJS/recommended"],
  },
  {
    extends: fixupConfigRules(flatCompat.extends("@react-native")),
  },
  globalIgnores(["node_modules/*", "lib/*"]),
]);
