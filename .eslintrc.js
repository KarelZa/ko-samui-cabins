/* eslint-env node */
module.exports = {
  root: true,
  extends: ['next/core-web-vitals'],
  plugins: ['@typescript-eslint', 'tailwindcss'],
  rules: {
    'tailwindcss/classnames-order': 'off',
  },
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['node_modules/*', '.next/*', '.out/*', '!.prettierrc.js'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: ['./tsconfig.json'],
        projectService: true,
        tsconfigRootDir: __dirname,
      },
      extends: [
        'next/core-web-vitals',
        'plugin:@typescript-eslint/recommended',
        'plugin:tailwindcss/recommended',
        //'plugin:@typescript-eslint/recommended-type-checked',
        // 'plugin:@typescript-eslint/strict-type-checked',
        // 'plugin:@typescript-eslint/stylistic-type-checked',
      ],
      rules: {
        'tailwindcss/classnames-order': 'off',
        'tailwindcss/no-custom-classname': 'off',
        'react/prop-types': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        'react/jsx-fragments': ['warn', 'syntax'], // Shorthand syntax for React fragments
        'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
        'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
        'react-hooks/exhaustive-deps': 'error',
        '@typescript-eslint/explicit-function-return-type': [
          'off',
          {
            allowExpressions: true,
            allowTypedFunctionExpressions: true,
          },
        ],
      },
    },
  ],
};
