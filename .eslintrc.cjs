module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  rules:{
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'react-native/no-inline-styles': 0,
    'no-trailing-spaces': 'off',
    semi: 'off',
    eol: 'off',
  }
}
