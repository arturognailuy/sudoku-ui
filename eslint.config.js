import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { globalIgnores } from 'eslint/config'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: tseslint.parser, // Explicitly set parser for TypeScript files
      parserOptions: {
        // Removed parserOptions.project to avoid parsing errors for now
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      // General JS/React rules
      'indent': ['error', 2],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      'comma-dangle': ['error', 'always-multiline'],
      'no-trailing-spaces': 'error',
      'prefer-const': 'error',
      'no-var': 'error',
      'object-shorthand': ['error', 'always'],
      'array-callback-return': 'error',
      'no-console': ['error', { allow: ['warn', 'error'] }], // Treat console.warn as error

      // TypeScript specific rules
      '@typescript-eslint/explicit-function-return-type': 'off', // Often too strict for quick prototyping
      '@typescript-eslint/no-explicit-any': 'error', // Treat any as error
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_'}], // Treat unused vars as error
    },
  },
])