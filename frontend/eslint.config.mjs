import eslintPluginReact from "eslint-plugin-react";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";
import babelEslintParser from "@babel/eslint-parser";

export default [
  {
    ignores: ["node_modules/**"],
  },
  {
    files: ["src/**/*.js", "src/**/*.jsx"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      parser: babelEslintParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ["@babel/preset-react"], // Adiciona o preset do React
        },
      },
    },
    plugins: {
      react: eslintPluginReact,
      prettier: eslintPluginPrettier,
    },
    rules: {
      ...eslintConfigPrettier.rules, // Inclui as regras do Prettier
      "prettier/prettier": "error",
    },
  },
];