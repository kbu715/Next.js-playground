module.exports = {
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'], // plugin과 eslint-config-prettier 설정을 한번에 합니다.
  plugins: ['import', 'react-hooks'],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
