module.exports = {
  plugins: ['@typescript-eslint', 'prettier'],
  ignorePatterns: ['coverage', 'dist', '__tests__/setup.ts'],
  parser: '@typescript-eslint/parser',
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/explicit-function-return-type': 'error',
    'no-unused-vars': 'off',
    'prettier/prettier': 'error',
  },
}
