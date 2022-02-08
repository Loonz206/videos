module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "standard",
    "plugin:prettier/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:sonarjs/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {},
  settings: {
    react: {
      version: "detect",
    },
  },
};
