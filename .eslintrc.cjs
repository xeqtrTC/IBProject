export default {
  root: true,
  env: {
    es2021: true,
    node: true,
    browser: false,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },

  plugins: ["@typescript-eslint", "react-refresh"],
  ignorePatterns: ["node_modules/**", "**/dist/**"],
  rules: {
    "react-refresh/only-export-components": ["warn", { checkTS: true }],
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/consistent-type-imports": "error",
    /**
     * Having a semicolon helps the optimizer interpret your code correctly.
     * This avoids rare errors in optimized code.
     * @see https://twitter.com/alex_kozack/status/1364210394328408066
     */
  },
};