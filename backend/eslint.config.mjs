export default [
  {
    ignores: ["node_modules/**"], // Ignora a pasta node_modules
  },
  {
    files: ["**/*.js"], // Aplica as configurações aos arquivos JavaScript
    languageOptions: {
      ecmaVersion: "latest", // Define a versão mais recente do ECMAScript
      sourceType: "module", // Define o tipo de módulo como "module"
    },
    plugins: {
      prettier: require("eslint-plugin-prettier"), // Adiciona o plugin do Prettier ao ESLint
    },
    extends: ["eslint:recommended", "plugin:prettier/recommended"], // Extende as configurações recomendadas do ESLint e do Prettier
    rules: {
      "prettier/prettier": "error", // Define que erros do Prettier devem ser tratados como erros do ESLint
    },
  },
];
