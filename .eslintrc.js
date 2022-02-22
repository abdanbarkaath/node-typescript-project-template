module.exports = {
  env: {
    es2021: true,
    browser: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typrscript",
    "prettier/@typescript-eslint",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "prettier", "import"],
  rules: {
    "no-console": "off",
    "prettier/prettier": "error",
    "import/extensions": "off",
    "import/no-relative-parent-imports": "warn",
    "@typescript-eslint/no-explicit-any": "warn",
  },
}
