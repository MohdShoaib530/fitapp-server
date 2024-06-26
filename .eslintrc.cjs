module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['eslint:recommended'],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'module'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: '2022',
    sourceType: 'module'
  },
  plugins: ['simple-import-sort'],
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'windows'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-unused-vars': ['warn'],
    'no-console': ['warn'],
    eqeqeq: ['error', 'always'],
    curly: ['error', 'all'],
    'brace-style': ['error', '1tbs'],
    'no-trailing-spaces': ['error'],
    'comma-dangle': ['error', 'never'],
    'no-var': ['error'],
    'prefer-const': ['error'],
    'simple-import-sort/imports': ['error'],
    'no-process-env': ['off'],
    'no-undef': 'off'
  }
};
