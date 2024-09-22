export default [
  {
    ignores: ["node_modules/**"], // Ignorar a pasta node_modules
  },
  {
    files: ["src/**/*.js", "src/**/*.jsx"], // Arquivos JavaScript e JSX na pasta src
    languageOptions: {
      ecmaVersion: "latest",  // Definir a versão do ECMAScript mais recente
      sourceType: "module",  // Usar módulos ES
    },
    plugins: {
      react: require("eslint-plugin-react"), // Plugin ESLint para React
      prettier: require("eslint-plugin-prettier"),  // Plugin ESLint para Prettier
    },
    extends: [
      "eslint:recommended", // Usar as recomendações padrão do ESLint
      "plugin:react/recommended", // Usar as recomendações do plugin React
      "plugin:prettier/recommended" // Usar as recomendações do plugin Prettier
    ],
    rules: {
      "prettier/prettier": ["error"], // Configurar Prettier para lançar erros
    },
  },
];
