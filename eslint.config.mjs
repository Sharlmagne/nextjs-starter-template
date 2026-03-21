import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  // Core configurations using FlatCompat for backward compatibility
  ...compat.extends(
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ),

  // Parser configuration
  {
    languageOptions: {
      parser: await import('@typescript-eslint/parser'),
      parserOptions: {
        project: 'tsconfig.json',
        sourceType: 'module',
      },
      ecmaVersion: 'latest',
    },
  },

  // Global settings
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      '@typescript-eslint': (await import('@typescript-eslint/eslint-plugin'))
        .default,
      'unused-imports': (await import('eslint-plugin-unused-imports')).default,
      import: (await import('eslint-plugin-import')).default,
    },
    settings: {
      next: {
        rootDir: '.',
      },
    },
    rules: {
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          varsIgnorePattern: '^UNUSED_',
          argsIgnorePattern: '^UNUSED_',
        },
      ],
      'react/no-unescaped-entities': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/ban-types': 'off',
      'unused-imports/no-unused-imports': 'error',
      'import/no-cycle': 'error',
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
        },
      ],
    },
  },

  // Overrides for specific file types
  {
    files: ['*.js', '*.tsx', '*.ts', '*.jsx'],
    rules: {
      '@next/next/no-img-element': 'off',
    },
  },
]

export default eslintConfig
