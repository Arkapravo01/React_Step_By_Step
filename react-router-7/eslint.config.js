import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },

  {
    files: ['**/*.{js,jsx}'],

    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.browser,

      parserOptions: {
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },

    settings: {
      react: {
        version: 'detect',
      },
    },

    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },

    rules: {
      // Basic JavaScript errors
      'no-undef': 'error',

      // React
      ...react.configs['jsx-runtime'].rules,

      // React Hooks
      ...reactHooks.configs.recommended.rules,

      // Don't care about unused variables
      'no-unused-vars': 'off',

      // Don't care about these stylistic warnings
      'react/prop-types': 'off',
      'react/jsx-no-target-blank': 'off',

      // Keep Vite's Fast Refresh check
      'react-refresh/only-export-components': 'warn',
    },
  },
]