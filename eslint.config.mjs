import { fixupConfigRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import { defineConfig, globalIgnores } from 'eslint/config';

import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

const flatCompat = new FlatCompat();

export default defineConfig([
  eslintPluginPrettierRecommended,
  {
    extends: fixupConfigRules(flatCompat.extends('@react-native')),
  },
  globalIgnores(['node_modules/*', 'lib/*']),
]);
