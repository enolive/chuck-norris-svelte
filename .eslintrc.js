module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: { // add these parser options
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    extraFileExtensions: ['.svelte'],
  },
  plugins: [
    'svelte3',
    '@typescript-eslint'
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  env: {
    browser: true,
    node: true
  },
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3'
    }
  ],
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    '@typescript-eslint/explicit-function-return-type': ['error', {allowExpressions: true}]
  },
  settings: {
    'svelte3/typescript': require('typescript'),
  }
};
