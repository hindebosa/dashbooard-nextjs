import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),{
    rules:{
      "@typescript-eslint/no-unused-vars":"off",
      "@typescript-eslint/no-explicit-any":"off",
      "react/jsx-key":"off",
      "react/no-unescaped-entities":"off",
      "react/react-in-jsx-scope":"off",
      "react/no-children-prop":"off",
    }
  }
];

export default eslintConfig;
