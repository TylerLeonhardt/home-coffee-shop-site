import js from '@eslint/js';
import react from 'eslint-plugin-react';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    files: ['public/**/*.js', 'public/**/*.mjs'],
    plugins: { react },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
      },
    },
    settings: {
      react: { version: '18.3.1' },
    },
    rules: {
      // Allow CDN import URLs
      'no-unused-vars': ['warn', { varsIgnorePattern: '^_' }],
      // React rules
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
    },
  },
];
