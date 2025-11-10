import js from "@eslint/js";
import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettier from "eslint-plugin-prettier";
import nextPlugin from "@next/eslint-plugin-next";

export default [
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    // Include all paths from .eslintignore
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "public/**",
      "next.config.ts",
      "tailwind.config.ts",
      "postcss.config.mjs",
      "env-config.ts",
      "**/*.config.ts",
      "**/dist/**",
      "coverage/**",
      "build/**",
    ],
    languageOptions: {
      parser: tsParser,
      globals: {
        // Node.js globals
        process: "readonly",

        // Console
        console: "readonly",

        // Browser globals
        window: "readonly",
        self: "readonly",
        document: "readonly",
        navigator: "readonly",
        location: "readonly",
        history: "readonly",

        // Storage
        localStorage: "readonly",
        sessionStorage: "readonly",

        // User interaction
        alert: "readonly",
        confirm: "readonly",
        prompt: "readonly",

        // Fetch API
        fetch: "readonly",
        Headers: "readonly",
        Request: "readonly",
        Response: "readonly",
        FormData: "readonly",
        URLSearchParams: "readonly",
        URL: "readonly",
      },
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "@typescript-eslint": ts,
      prettier: prettier,
      "@next/next": nextPlugin,
    },
    rules: {
      // Disable ESLint's indent rule to defer to Prettier
      indent: "off",
      // Enforce the use of single quotes for strings
      quotes: ["error", "single"],
      // Enforce consistent line breaks (LF for Unix)
      "linebreak-style": ["error", "unix"],
      // Require the use of === and !== (no implicit type conversions)
      eqeqeq: ["error", "always"],
      // Enforce a maximum line length (usually 80 or 100 characters)
      "max-len": [
        "error",
        {
          code: 100,
          ignoreUrls: true,
          ignoreStrings: false,
          ignoreTemplateLiterals: false,
          ignoreRegExpLiterals: true,
          ignoreComments: false,
        },
      ],
      // Enable Prettier as a lint rule
      "prettier/prettier": ["error", {}, { usePrettierrc: true }],
      // Enforce template literals for long strings
      "prefer-template": "error",
      // Enforce multi-line template literals for long strings
      "no-multi-str": "error",
      // Next.js specific rules
      "@next/next/no-html-link-for-pages": "error",
      "@next/next/no-img-element": "error",
    },
  },
];
