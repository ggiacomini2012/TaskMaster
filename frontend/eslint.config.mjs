export default [
  {
    ignores: ["node_modules/**"], // Ignorar a pasta node_modules
  },
  {
    languageOptions: {
      ecmaVersion: "latest",  // Definir a versão do ECMAScript mais recente
      sourceType: "module",  // Usar módulos ES
    },
    plugins: {
      prettier: require("eslint-plugin-prettier"),  // Plugin Prettier
    },
    extends: [
      "airbnb",  // Regras do Airbnb
      "plugin:prettier/recommended",  // Regras do Prettier integradas com o ESLint
    ],
    rules: {
      "prettier/prettier": ["error"],  // Tratar erros de Prettier como erros do ESLint
    },
  },
];
