import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default defineConfig([
  { files: ["src/**/*.{js,mjs,cjs,ts}"] },
  globalIgnores(["dist/", "node_modules/", "public/"]),
  {
    languageOptions: { globals: globals.node },
  },
  {
    plugins: { js },
    extends: ["js/recommended"],
  },
  tseslint.configs.recommended,
  eslintPluginPrettierRecommended,
]);
