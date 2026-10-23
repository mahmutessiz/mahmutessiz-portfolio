import js from "@eslint/js";
import vue from "eslint-plugin-vue";
import globals from "globals";
export default [
  { ignores: ["dist/**", "coverage/**"] },
  js.configs.recommended,
  ...vue.configs["flat/essential"],
  {
    files: ["**/*.{js,vue}"],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
];
