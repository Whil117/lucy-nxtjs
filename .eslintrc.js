module.exports = {
  env: {
    browser: true,
    node: true,
    es2020: true,
    jest: true,
  },
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    warnOnUnsupportedTypeScriptVersion: false,
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    "@emotion",
    "@typescript-eslint",
    "react",
    "react-hooks",
    "prettier",
  ],
  extends: [
    "airbnb",
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "prettier",
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  rules: {
    "no-console": ["error", { allow: ["warn", "error"] }],
    "@emotion/no-vanilla": "error",
    "@emotion/import-from-emotion": "error",
    "@emotion/styled-import": "error",
    "no-unused-vars": "off",
    "@typescript-eslint/no-explicit-any": ["error", { ignoreRestArgs: true }],
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-namespace": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        vars: "all",
        args: "after-used",
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        ignoreRestSiblings: false,
      },
    ],
    "import/extensions": [1, { extensions: [".js", ".jsx", ".ts", ".tsx"] }],
    "import/no-extraneous-dependencies": 0,
    "import/no-unresolved": 0,
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "react/no-danger": 0,
    "react/react-in-jsx-scope": 0,
    "react/jsx-first-prop-new-line": 0,
    "react/prop-types": 0,
    "react/jsx-props-no-spreading": [2, { custom: "ignore" }],
    "react/display-name": 0,
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],
    "react/require-default-props": 0,
    "react/destructuring-assignment": 0,
    "no-use-before-define": 0,
    "import/prefer-default-export": "off",
    "react-hooks/rules-of-hooks": 2,
    "react-hooks/exhaustive-deps": 0,
    "no-bitwise": 2,
    "prettier/prettier": ["error", { endOfLine: "auto" }],
    "no-underscore-dangle": "off",
    "no-nested-ternary": "off",
    "comma-dangle": "off",
    "trailing-comma": "off",
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
      typescript: {},
    },
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
};
