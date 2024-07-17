import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";


export default [
  { files: ['**/*.{js,mjs,cjs,jsx}'] },
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  {
      languageOptions: {
          globals: {
              ...globals.browser,
              process: 'readonly',
          },
      },
  },

  pluginJs.configs.recommended,
  pluginReactConfig,
  {
      ...pluginReactConfig,
      settings: {
          react: {
              version: 'detect', // or specify the exact version like "18.0"
          },
      },
      rules: {
          'no-unused-vars': 'off',
          'react/react-in-jsx-scope': 'off', // Update the rule here,
          'jsx-quotes': ['error', 'prefer-single'],
          'quotes': ['error', 'single'], // Enforce single quotes
          indent: ['error', 2],
      },
  },
];