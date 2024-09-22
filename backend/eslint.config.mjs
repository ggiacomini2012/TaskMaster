import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";
import babelEslintParser from "@babel/eslint-parser";

export default [
  {
    ignores: ["node_modules/**"],
  },
  {
    files: ["src/**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      parser: babelEslintParser,
      parserOptions: {
        requireConfigFile: false,
      },
    },
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      ...eslintConfigPrettier.rules, // Inclui as regras do Prettier
      "prettier/prettier": "error",
    },
  },
];